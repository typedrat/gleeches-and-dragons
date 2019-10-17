// Use focus-within polyfill so no having to maintain where the current focus is within tree
// Let the DOM do it!
// https://github.com/matteobad/focus-within-polyfill

/**
 * 
 * @param {*} parentUlEl - A UL element
 */
const getUlMetaData = parentUlEl => {
			const parentLiEl = parentUlEl.parentElement.tagName === 'LI' && parentUlEl.parentElement; // If false, is root
			const strParentIndex = parentLiEl && parentLiEl.dataset.menuindex; // If false, is root
			const parentIndex = Number(strParentIndex);
			const grandParentUlEl = parentLiEl && parentLiEl.parentElement; // If false, is root
			const isRoot = !parentLiEl || !grandParentUlEl;

			return {
				parentLiEl,
        parentIndex,
        grandParentUlEl,
        isRoot
			};
		};

document.addEventListener('DOMContentLoaded', () => {
  const menuGroups = Array.from(document.querySelectorAll('.dropdown-menu-list'));

  menuGroups.forEach(menuGroupUlEl => {
    const menuLiItems = Array.from(menuGroupUlEl.children);
    const parentUlEl = menuGroupUlEl;

    const { parentIndex, grandParentUlEl } = getUlMetaData(parentUlEl);
      
    menuLiItems.forEach((menuLiElement, strMenuIndex) => {

      const menuIndex = Number(strMenuIndex);
      menuLiElement.setAttribute('data-menuindex', menuIndex);

      const getMenuItemByI = (j, el) => Array.from(el.children)
        .find(child => Number(child.dataset.menuindex) === Number(j));

      menuLiElement.addEventListener('keydown', e => {
        const stop = () => {
          e.stopPropagation();
          e.preventDefault();
        };

        switch (e.key) {
          case 'ArrowDown': {
            // Get the item below the current one
            // If nothing is there, go ahead and get the parent one after the current parent
            stop();
            let el = getMenuItemByI(menuIndex + 1, parentUlEl);
            // If overflowing to the parent item below
            
            let ul = parentUlEl;
            if (!el && ul) {
            while (true) {
                  const { parentIndex: gpIndex, grandParentUlEl: newGrandParentUlEl, isRoot } = getUlMetaData(ul);
                  const tmpEl = getMenuItemByI(gpIndex + 1, newGrandParentUlEl);
                  if (el || tmpEl) {
                    el = tmpEl;
                    break;
                  }
                  if (isRoot) break;
                  ul = newGrandParentUlEl;
              }
            }
            // T'was root, still null. Break
            if (!el) break;
            el.focus();
            break;
          }
          case 'ArrowUp': {
            stop();
            // If overflows, select menu below submenu
            let el = getMenuItemByI(menuIndex - 1, parentUlEl);
            if (!el && grandParentUlEl) el =
											menuIndex == 0
												? getMenuItemByI(parentIndex, grandParentUlEl)
												: getMenuItemByI(parentIndex - 1, grandParentUlEl);
            if (!el) break;
            el.focus();
            break;
          }
          case 'Enter':
          case ' ':
            stop();
            // Fall thru intentionally - make sure that right arrow isn't just clicking
            if (!menuLiElement.dataset.haschildren) menuLiElement.children[0].click();
          case 'ArrowRight':
            stop();
            if (!menuLiElement.dataset.haschildren) break;
            const el = Array.from(Array.from(menuLiElement.children)
              .find(child => child.tagName === 'UL')
              .children
            )[0];
            if (!el) break;
            el.focus();
            break;
          case 'ArrowLeft': // Thing
            // If root, don't do anything
            if (!grandParentUlEl) break;
            stop();
            getMenuItemByI(parentIndex, grandParentUlEl).focus();
            break;
          default:
            break;
        }
      })
    })
  })
});
