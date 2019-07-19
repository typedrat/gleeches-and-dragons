---
title: "Combat"
---

## Overview

Combat is a special case of Turn Order play, using the following rules:

  - Initiative Modifier: your initiative modifier (INIT) is (INT + COO)
    ÷ 5
    
      - see the Derived Stat in *Character Creation*.

  - Action allotment
    
      - one Standard Action and one Quick Action, or
      - three Quick Actions
      - since Task Actions are not given in the action allotment, Task
        Actions are not tracked during Combat; see *Turn Order Play*.

  - In combat, a turn is about 3 seconds; therefore, there are 20 turns
    in a minute.

  - Unlike many other areas of the game, Combat has fairly specific
    rules about what characters can and cannot do.

### Useful Terms

  - These aren’t really useful here, but having them defined will make
    some powers a little easier to write. Remove / move?
  - Threatened: we say that you *threaten* an opponent if you could make
    a melee attack against them; you usually threaten opponents if they
    are next to you.
  - Bloodied: we say that a character is *bloodied* if they have taken
    DV exceeding half their DUR.

## The Combat Grid and Movement

  - Combat Grid
    
      - positions in combat are usually tracked using a *square grid*,
        with each square representing a 1 meter square.
      - Most creatures (those that are Small-, Normal- or Large-sized)
        usually take up one square, and can reach the adjacent squares
        (to attack them, for example).
      - Distances (like ranges) are usually measured directly and then
        rounded to the nearest whole meter. Distance while moving
        depends on the exact path traveled (in this case, “diagonal
        steps” count as traveling 1.5 meters).
      - Traditionally, *facing* is not tracked.
      - Though we will assume a combat grid with one-meter squares in
        this guide, nothing prevents you from using other combat
        systems—like hex-grids or miniatures—as long as the rules for
        measuring distance, determining reach and tracking movement are
        well-defined.

  - Movement
    
      - Collectively, the following are called Movement Actions. You may
        only use one Movement Action during your turn.
    
      - As a quick action, you may *move*: you may move up to your base
        movement rate.
    
      - As a quick action, you may *move quickly*: you may move up to
        your full movement rate. After doing so, you suffer a -10
        penalty to all Physical skill tests until your next turn.
    
      - As a quick action, you may *charge*: you may move up to your
        full movement rate, and you suffer a -10 penalty to all Physical
        skill tests until your next turn. See *Charging* and *Bracing*
        below for more information.
    
      - You may also perform *Stunts*.
        
          - “Stunts” are used when your character attempts unusual,
            difficult maneuvers—they jump, tumble, flip, climb (if they
            don’t have a climb speed), swing and so on.
          - The type of action varies: rolling under a hazard might be a
            quick action, but climbing a trellis might be a standard
            action (for a character without a climb speed).
          - How far the character is moved will also vary (in general,
            GMs should move characters by either their base or full
            rates).
          - Stunts almost always require a test using an appropriate
            movement skill (this is usually Athletics for humanoid
            creatures).
          - Stunts may have other affects as well (a dive-and-roll may
            allow you to end your turn prone behind cover, a flip off a
            table may allow you to cross over an enemy and land facing
            their back).

## Attacking

  - Attacking a target
    
      - a Standard Action (whether in melee or using a ranged weapon)
    
      - roll an Ordered Opposed Check, first the attacker and then the
        defender
        
          - Attacker Wins: Defender takes attack damage (listed damage
            for a weapon or power)
          - Defender Wins: Defender takes no damage
    
      - Exceptional Results:
        
          - Attacker MoS \> 30: +5 DV
          - Attacker MoS \> 60: +5 more DV (+10 DV total)
          - Attacker critical success: roll damage dice twice, take best
            result.
    
      - Attack Skills: use the attack skill appropriate to the weapon;
        some attacks will specify an Attack Skill.
        
          - Note that it may be possible to wield some weapons using
            more than one attack skill, depending on the skills and
            proficiencies the user has.
    
      - Defense Skills: you can defend with many different skills
        
          - Fray is the most general defense skill. It can be used to
            defend against most attacks. (Among it’s other uses, see
            Skills).
        
          - You can use your own melee attack skills to defend against
            melee attacks (assuming you have an appropriate weapon to
            use, of course).
            
              - For example, If you have a sword, you can use your
                One-Handed Weapons to defend against someone attacking
                you with a halberd. This represents you parrying or
                deflecting their attacks.
              - Since Unarmed is a melee attack skill, you can use it to
                defend in this way, too; however, you will be at a
                disadvantage against an armed opponent, see *Unarmed
                Combat and Natural Weapons* below.
        
          - Sometimes you can defend with movement skills, like
            Athletics; see *Full Defense* in *Unsorted Rules,* below.

  - Ranged Attacks: ranged attacks (projectile weapons, thrown weapons
    and some powers) use the rules for *attacking a target*, with the
    following addition:
    
      - Range: ranged attacks have range categories: you are in a given
        range category if your distance to the target is the listed
        distance or less. Each range category has a modifier, which
        applies to the attack test:
        
          - short: no modifier
          - medium: -10
          - long: -20
          - extreme: -30
    
      - base ranges for throwing things:
        
          - short: up to 5 meters
          - medium: up to 15m
          - long: up to 30m
          - extreme: up to 45m
          - adjust for weight, aerodynamics of object
    
      - Scatter: ranged attacks may scatter.
        
          - You may choose from the following methods for determining
            scatter.
          - Method 1: roll 2d10. One d10 indicates the scatter direction
            (there are 8 adjacent squares, so discard 9 and 10 results),
            the other the distance (in meters).
          - Method 2: with a physical table, roll 1d10. The result is
            the distance in meters, and the direction the dice is
            pointing indicates the scatter direction.
          - Scatter is mainly a concern when the weapon also has the
            Blast property; you usually don’t worry about where an arrow
            scatters to.
    
      - Point-Blank Attacks: making a ranged attack at point-blank range
        (that is, against a target in an adjacent space) gets a -20
        penalty.
    
      - Ammunition
        
          - Projectile weapons (like bows) require ammo.
          - We include access to common ammunition in the price of the
            weapon, and we assume that a character has enough ammunition
            that they will not run out under normal circumstances (which
            is to say, we do not track in detail how much ammo a
            character is carrying or has used).
          - Uncommon ammunition—ammunition that is made of special
            materials, that is expensive, that is magical, or that is
            otherwise special—is purchased separately and tracked.
          - Most projectile weapons can be reloaded; the weapon’s
            description will specify what kind of action is required to
            reload the weapon (or that it cannot be reloaded, should
            that be the case).

  - Touch-Only Attacks: sometimes, notably when using some powers, an
    attacker only needs to touch their target.
    
      - Treat this as an attack, using the standard rules. The attacker
        may use either COO+SOM+SOM or their Unarmed Combat skill (no
        proficiency required); they receive a +20 bonus. The defender
        takes a -20 penalty.

  - Indicate-Only Attacks: sometimes, notably when using some Powers, an
    attacker only needs to direct an effect to a target – by pointing at
    the target, for example, or fixing their gaze on the target.
    
      - Treat this as a ranged attack, using the standard rules. The
        attacker may use either 3×COO or their Ranged Weapons skill (no
        proficiency is required); they receive a +20 bonus. The defender
        takes a -20 penalty.

  - Un-Aware Target: targets who are not aware that they are being
    attacked cannot defend. (The attacker must still roll to hit their
    target.) (PCs and major NPCs should usually be allowed a Perception
    Check to notice a hidden attacker. Also, people usually take notice
    after they have been attacked.)

## Armor and Armor Penetration

  - Armor and Armor Penetration: if the defender has Armor, subtract
    their (total) Armor Rating from the attack's DV. However, if the
    attack has Armor Penetration (AP) – usually because the weapon in
    use has armor penetration – subtract the Armor Penetration from the
    Armor. Armor Penetration and Damage Values can't be negative.
    
      - Damage inflicted is then: DV – (Armor – Armor Penetration)

  - Armor Penalty: some armors have a listed Armor Penalty, which you
    take while you are wearing that armor.

## Strikes and Maneuvers

The combat system in Renaissance is intended to be light-weight and
flexible; characters should be able to attempt a variety of attacks,
maneuvers and tricks, and GMs (ideally) should adjudicate these
on-the-fly. *However,* players and Gms both can benefit greatly from
some guidance on the kinds of things that are possible; we therefore
refer you to the *Special Attacks* section in *Alternate Rules: *those
rules are optional, but *useful* and *recommended*.

  - Any skilled melee combatant will have developed a repertoire of
    useful tricks, more than simply *sticking pointy end in other
    fighter.* We call these *strikes* and *maneuvers*.
    
      - A *strike* is a modification to a normal attack. To make a
        strike, you take a penalty on your attack; if you score an
        Exceptional Success, in addition to the normal affects of the
        attack, you gain the listed Result.
        
          - You decide if your attack is going to be a strike before you
            make it (since you have to take a penalty on the attack).
          - An attack can only be one kind of Strike. (You can’t take a
            -20 penalty to have an attack be both a Called Shot and a
            Knock Down, for example.)
    
      - A *maneuver* is a separate action; it isn’t made as part of an
        attack.
        
          - Each maneuver will list the type of action required, the
            check, and the result if you succeed.
    
      - The following list is by no means exhaustive; players and GMs
        should feel free to devise and attempt new during play.

  - Strikes:
    
      - Called Shot
        
          - Penalty: -10
          - Result: you strike the target in a specified location (you
            pick the location before your attack).
          - This one is a catch-all, with results up to the GM.
          - Special: the attack gains the Precision tag
    
      - Knock Down
        
          - Penalty: -10
          - Result: your opponent must attempt a SOM×2 check or be
            knocked *prone*.
          - Special: must be a melee attack.
    
      - Maim
        
          - Penalty: -20
          - Result: You maim your opponent, removing a specific limb.
            You can use this to lop off a hand, break a knee or gouge
            out an eye.
          - Special: the attack gains the Precision tag.
    
      - Mighty Blow
        
          - Penalty: -10
          - Result: You strike your opponent with particular force; you
            gain +DB to your DV.
          - Special: must be a melee attack.
    
      - Strike an Armor Gap
        
          - Penalty: -10
          - Result: You strike a weak spot in the opponent’s Armor; you
            gain +DB to your AP.
          - Special: the attack gains the Precision tag.

  - Maneuvers:
    
      - Disarm
        
          - Action: Standard Action
          - Test: Your melee attack skill vs. target’s melee attack
            skill or Fray
          - Result: If you succeed, then you disarm your opponent,
            forcing them to drop one held item (like a weapon or
            shield).
    
      - Feint
        
          - Action: Quick Action
          - Test: Your Deception vs. target’s Resist Social Manipulation
            or Read
          - Result: until the beginning of their next turn, the target
            takes a -20 penalty to their defense.
    
      - Grabbing
        
          - Action: Standard Action
          - Test: your Unarmed Combat vs. target’s Fray or Unarmed
            Combat.
          - Result: you grab the opponent, impeding them. They cannot
            easily act.
          - The results are at the GM’s discretion, but normally grabbed
            characters cannot take any other actions besides attempting
            to escape the grab.
          - A grabbed character can attempt to break a grapple, using
            either their Unarmed Combat or their STR+SOM, versus the
            Unarmed Combat of the character grabbing them. If they win,
            they break free.
    
      - Trip
        
          - Action: Standard Action
          - Test: your melee attack skill vs. target’s Fray
          - Result: You trip your opponent, causing them to fall prone.

  - Special:
    
      - Catch
        
          - Some weapons are designed to *catch* an opponent’s weapon;
            these weapons have the *catch* tag.
          - When you are attacked while wielding a weapon with the
            *catch* tag, rather than defending as normal, you can decide
            to attempt to *catch* your opponent’s weapon.
          - This works much like defending as normal, except that you
            take a -10 penalty, and if you win and score an exceptional
            success, then you have *caught* your opponent’s weapon (in
            addition to successfully defending against their attack).
          - While you have caught an opponent’s weapon, neither you nor
            they can attack with the involved weapons or move.
          - During your turn, you may release your opponent’s weapon as
            a Free Action. You may also attempt to *Disarm* the weapon
            that you have caught; if you do, you gain a +10 bonus.
          - Your opponent may let go of the caught weapon as a Free
            Action; alternatively, they may attempt to break the weapon
            free as a Quick Action with SOM+STR check.
          - Attempting to catch is a *reaction*, see *Reactions* below.
    
      - Dismount
        
          - I’m honestly at a bit of a loss as to how to write this one.
            Maybe we shouldn’t?
          - Should we make it a modified version of bracing to receive a
            charge? A special attack? An action you can attempt any time
            you strike a mounted rider?

  - Examples
    
      - A goblin gang-member has figured out that she cannot get past
        Chandra’s armor, so she decides to *strike an armor gap.* She
        attacks Chandra, rolling her One-Handed Weapons (normally 60,
        but 50 with the penalty for the trick) against Chandra’s Fray
        (60). The goblin ganger rolls a 21, and Chandra rolls a 73; the
        Goblin hits Chandra and deals damage like normal, but she
        doesn’t get the bonus to AP she was hoping for, since she
        didn’t score an Exceptional Success.
      - Track is fighting a monster that attacked the party in a frozen
        monastery. The fight isn’t going well, so he decides he needs to
        knock it down and get away. He tries to Knock it Down, and rolls
        his One-Handed Weapons (normally a 70, but a 60 with the penalty
        for the trick) against it’s Fray (70). He scores a 41, and the
        monster scores a 13; Track gets to deal his normal
        damage—including the +5 bonus for scoring an exceptional
        success—and then the monster has to roll its SOM×2 or be knocked
        prone.
      - Note: there’s no reason you can’t spend moxie on these checks.
        As an example: Alexis has snuck up behind a watchman guarding a
        slaver encampment; she wants to dispatch him quickly, so she
        decides to throw a knife at his neck using Maim. She rolls her
        Ranged Weapons (normally 60, but 40 with the penalty), and gets
        a 21: she hit him, but she didn’t strike the mortal blow she
        wanted. (He doesn’t get to defend, because he’s un-aware of her,
        see Un-Aware Target below.) She decides she really needs to
        dispatch him, so she spends a Luck to upgrade her attack to an
        Exceptional Success; now, not only will she get the +5 DV for an
        exceptional success, but she’s hit him in the neck—a fatal
        blow\!

## Multiple Weapons and Multiple Attacks

  - Multiple Attacks: under some circumstances, characters can make
    multiple attacks (when wielding multiple weapons, for example). When
    a character attacks, they may make one attack with each weapon they
    are wielding; such an attack is still one Standard Action. Resolve
    each attack separately, using the normal procedure for each attack.
    When making Multiple Attacks, each attack suffers a -10 penalty.
    
      - Multiple Targets: when making multiple attacks, each attack can
        have a different target. When attacking multiple targets, each
        attack suffers an additional -10 penalty.
        
          - I’m trying to decide if I should word this as a general
            rule, or just make it specific to when you’re also making
            Multiple Attacks. The only other time I can see it applying
            is for a Cleave-like power.
          - Clarification: attacks with the Blast property are not
            considered “multiple-target attacks”.

  - Off-Hand Weapons: most characters (i.e. those without an appropriate
    Trait or Racial ability) have a dominant hand and an off-hand.
    Attacks made with the off-hand suffer a -10 penalty.
    
      - If the weapon you are using in your off-hand does not have the
        *off-hand* tag, you suffer an additional -10 penalty

  - Some Examples:
    
      - If you’re humanoid, you have the Ambidextrous trait and you are
        wielding two one-handed weapons, then you can make two separate
        attacks against one target as a Standard Action. Each attack
        suffers -10 penalty (for making Multiple Attacks).
      - If you don’t have the Ambidextrous trait, but the weapon in your
        off hand has the Off-Hand tag, then it’s one attack at -10 (the
        main hand, with the Multiple Attacks penalty) and one attack at
        -20 (the off-hand, with the Off-Hand and Multiple Attacks
        penalties).
      - If you don’t have the Ambidextrous trait, and you’re holding two
        one-handed-but-not-off-hand weapons, you can still choose to
        make only one attack, and that attack will have no penalty (main
        hand), or a -20 penalty
        (off-hand-attack-without-offhand-tagged-weapon, if you make your
        one attack with your off hand, for some reason).

  - Feedback required\!
    
      - These rules are complicated and have lots of cumulative
        penalties; carefully watch how this works out.

## Resistance and Vulnerability

  - Resistance and Vulnerability:
    
      - some creature, objects or armors will have a Resistances and
        Vulnerabilities
    
      - The Resistance or Vulnerability will name the keywords to which
        they apply – for example, Resistance: Fire or Vulnerability:
        Cold. If an attack is *resisted*, then its effects are reduced;
        if a creature is *vulnerable* to an attack, then its affects
        will be increased.
    
      - Option 1:
        
          - Attacks, powers and other affects will specify what happens
            when they are *resisted*, or when a target is *vulnerable*
            to them.
        
          - Normally, if an attack does DV, then:
            
              - the DV is *halved* if it is *resisted*, or
              - the DV will be *doubled *if the target is *vulnerable*.
        
          - In some ways the ideal version, but bad because now every
            power has to have Resist and Vulnerable lines; just don’t
            wanna fuck with it.
    
      - Option 2: if the target is Vulnerable, they get -20 to their
        check; if they are Resistant, they get a +20 bonus. That spare
        me having to do Vulnerable and Resisted lines for each power.
        
          - Problem is that some powers don’t have checks. Also it’s
            just not very exciting.
    
      - Option 3:
        
          - ~~if the defender is Vulnerable to a power, then Success are
            treated as Exceptional Successes, and Exceptional Successes
            are treated as Criticals.~~ If the defender is vulnerable to
            an attack, effect or power, then the attacker’s checks are
            Upgraded.
          - ~~If the defender is Resistant to an effect, then
            Exceptional Successes and Criticals are treated as regular
            Successes.~~ If the defender is Resistant to an effect, then
            the attacker’s checks are Downgraded.
          - This sounds both Exciting and Easy without introducing new
            rules, but it’s vulnerable to the same thing that Option 2
            is; not every power will have a check (or a specific result
            on a critical).
    
      - Option 4
        
          - D\&D 5 style
          - if you resist, roll damage dice twice and take the lowest.
          - If you are vulnerable, roll damage dice twice and take the
            highest.
    
      - Option 5: the resist or vulnerable line will say what happens.
        
          - So some might just be “-2 DV” or “+3 DV”, while others might
            be “÷2 or “×3” or “catches fire” or “melts”.
          - I like that actually.

## Reactions

  - Under some situations, you can take an action (or might be forced to
    take an action) even though it isn’t your turn.
    
      - An action taken outside of your turn is called a *reaction*.
      - Once you take a reaction, you cannot take *another* reaction
        until the end of your next turn. (Roughly, you only get one
        reaction per turn cycle.)

  - Readied Actions: as a Standard Action, you may *ready* an action.
    When you ready an action, you specify another Standard Action, and a
    condition; if the condition occurs before your next turn, you may
    choose to take the specified action.
    
      - Activating your a Readied Action is a Reaction.

  - Attacks of Opportunity: if a character who you threaten attempts to
    move away from or past you, you may make an attack against them.
    This uses all the normal rules for an attack.
    
      - Hitting an opponent with an attack of opportunity doesn’t hinder
        their movement, unless you also incapacitate them with your
        attack (by knocking them over for example).
      - An Attack of Opportunity is a Reaction.

  - Reacting to Events
    
      - Sometimes events may demand an immediate response: you might
        want to grab hold of a rope if the floor breaks beneath you, or
        you might want to catch something that someone has thrown you.
      - Events like these also count as Reactions.

## Unarmed Combat and Natural Weapons

  - Some characters have learned to fight without a weapon, by striking
    opponents with punches, kicks, and other unarmed attacks; other
    characters have *natural* weapons, like claws, fangs, or spiked
    tails.

  - Characters who are unarmed are generally at a disadvantage against
    armed and armored opponents.
    
      - If a character who does not have *basic *proficiency in *Unarmed
        Combat *(that is, who has fewer than 10 ranks in *Unarmed
        Combat*)*,* then, when they are unarmed, they do not *threaten*
        opponents next to them, and they cannot use the *Unarmed Combat*
        skill to defend themselves against an armed opponent.
      - A character who *does* have basic proficiency in *Unarmed
        Combat* can use that skill to fight an armed opponent, but they
        are at a disadvantage; they take a -10 penalty when attacking,
        and a -20 penalty when defending.
      - A character who attacks an *armored* opponent with an unarmed
        attack is at risk of injury, for obvious reasons; on an
        exceptional failure, they take 1d10÷2 DV. Note that this applies
        to *unarmed attacks*, but not to grapples, throws, trips or
        similar maneuvers.
      - Conversely, characters wearing armor will do additional damage
        with an unarmed attack. Characters gain AV÷3 bonus damage to
        unarmed attacks, for the highest AV among the armors that
        they’re wearing.
      - Attacks with punches, kicks, and so on have the *Unarmed Attack*
        tag; note that some creatures and armors may have resistance to
        *unarmed* attacks.

  - Some characters have natural weapons, like claws, fangs or a spiked
    tail.
    
      - A character with a natural weapon is generally treated like an
        armed character; they threaten characters next to them, and can
        attack and defend against armed and armored characters.
      - A character using a natural weapon takes only a -10 penalty when
        defending against an armed character.
      - Attacks with natural weapons have the *Natural Weapon* tag (and
        don’t have the *Unarmed Attack *tag).
      - Attacks with natural weapons still use the Unarmed Combat skill;
        each natural weapon requires a specific proficiency (for
        example, Unarmed Combat (Claws), or Unarmed Combat (Fangs)).

  - Design Note: the original intent was that Unarmed Combat would be
    treated no differently than any other style of combat, without any
    special rules (and, importantly, without anything like a “mandatory
    feat chain” required to make it useful). This proved confusing, as
    many players assumed (not unreasonably\!) that they could not fight
    an armed character while unarmed, and often even attempted to take
    Powers to allow them to do so\! The rules given above are an attempt
    at a minimal viable treatment of the disadvantages of Unarmed
    Combat.

## Mounted Combat

  - Mounted warriors are highly effective combatants: they are highly
    mobile; they can wear heavy armor and carry heavy weapons; they are
    harder to strike, as the rider is out of easy reach of a combatant
    on foot; and they are capable of mighty charges.

  - For simplicity, we do not give the mount a separate turn from its
    rider, or track its actions separately; instead, the rider simply
    uses the mount’s movement modes, and can use the mount’s attacks
    (should it have any).

  - If the user is proficient in riding, then no test is required to use
    the mount’s normal movement (and attacks); Ride is a Movement Skill,
    see *Movement Skills*.
    
      - However, in order to be ridden in combat, the mount has to have
        been trained for war—or has to be from a species that is not
        frightened by battle.

  - The mount and rider can be attacked separately, and mounts can be
    wounded using all the normal rules.
    
      - The rider, however, is difficult to attack, being above and
        out-of-reach for most normal-sized characters. Attacks against
        the rider suffer a -20 penalty.
      - A mount’s wounds apply penalties to its actions, including its
        attacks and any checks caused by its movement, but not to the
        rider’s attacks.
      - If a mount falls—either because it is wounded and fails its
        check to remain standing, or for some other reason—then the
        rider may be thrown off, or even pinned under it. The rider
        should make a COO+COO+SOM test; if they succeed, they are thrown
        clear; if they fail, they may be trapped in their saddle—or even
        pinned under the mount.

  - Mounted charges are particularly vicious.
    
      - A mounted charge uses all the normal rules for a charge, except
        that the charging character gains an *additional* +DB on their
        attack, and they may use the mount’s STR rather than their own
        to compute their DB.
    
      - A charging character doesn’t have to *end* their movement after
        attacking; instead, they can continue to ride along, attacking
        characters as they ride pass. These are called *ride-by
        attacks*.
        
          - These attacks use all the rules for a charge, as well as for
            making *multiple attacks* against *multiple targets*, as
            above.
          - That is, under normal conditions, they gain an additional
            +DB to their attack, can use the mounts STR to compute their
            DV, and suffer both the -10 penalty for making multiple
            attacks and the -10 penalty for attacking multiple targets.
          - Note: it’s a ride-by attack if you attack during the middle
            of your movement instead of the end, even if you only attack
            on target.

  - Some weapons are not well-suited for use while mounted; weapons
    without the Cavalry tag take a -20 penalty when used while riding a
    mount.

## And Unsorted Rules

  - Full Defense: during your turn, you may take a Standard Action to
    focus on defending yourself. If you do, until your next turn starts,
    you receive a +20 bonus when you Defend.

  - Blast: a Blast Attack (an Attack with the Blast property) does its
    listed damage at the center of the blast, and 2 DV less for every
    meter away from the center. (In this way, the DV scored by the
    attack determines the radius of the blast.)
    
      - People in area of affect of a Blast Attack usually will not be
        able to Defend – you’re either in the explosion or you aren’t\!

  - Splash: similar to Blast attacks, some attacks cover an area, but do
    not directly cause damage (a thrown jar of Scour, for example; see
    Items). Attacks with the Splash property cover a given area (like
    1D10 meters).
    
      - Like Blast attacks, creatures in the area of a Splash Attack
        cannot usually defend.

  - Size and Combat
    
      - Ranged attacks against *small* targets receive a -10 penalty;
        however, attempts to grapple small targets are made at +10.
      - Ranged attacks against *large* targets receive a +10 bonus;
        however, attempts to grapple large targets are made at -10.
      - Greater bonuses and penalties may be used for larger size
        differences.
      - see *Sizes*

  - Natural Attacks: Natural Attacks are attacks made with “weapons”
    with the Natural tag (which is to say, claws, bites and so on).
    Natural attacks use the same rules as attacks with weapons.
    
      - Clarification: most Natural Attacks have the off-hand tag. This
        is the same off-hand tag that light weapons have; it means that
        the Natural Attack does not suffer the additional -10 penalty
        when made with a non-dominant hand.
      - *This could use some adjustment; feedback is appreciated.*

  - Unarmed Combat:
    
      - Unarmed Attacks have a base DV of 1d10+DB (Damage Bonus, see
        *Vital Statistics*), with no AP.
        
          - Unarmed Attacks have the Natural and Off-Hand tags.
          - Unarmed Attacks are punches, kicks and other similar
            attacks. Mechanically, they are those that are made without
            a Weapon or a listed Natural Attack.
    
      - An Unarmed Attack made against an opponent with a weapon (or
        natural attack) suffers a -10 penalty.
    
      - When using the Unarmed skill to defend against a weapon or
        natural attack, you take a -10 penalty.
    
      - I’m not actually sure I want or need either of those rules.

  - Charge: when you use the Charge move action, if you end your move at
    least (twice your walking rate) from where you started, then you
    gain +DB DV on your attacks for the rest of your turn.
    
      - This is still more awkward than I want it to be, but it’s
        getting there.

  - Brace: Weapons with the Brace tag can be used to prepare to receive
    a charge.
    
      - You need to have a weapon with the Brace tag.
      - Bracing to receive a charge is a Standard Action.
      - After bracing, until your next turn, if anyone *charges* you
        (see *Charge* above), you may attack them first, before they
        attack you. (Resolve the attack normally; the charging character
        can still defend, for example.)
      - If you hit the charging character, you deal +DB damage.
      - You do not prevent them from completing the charge (by attacking
        you), unless you incapacitate them with your attack (by
        disabling them, or by dealing a wound and knocking them prone,
        for example).

  - Prone:
    
      - You may drop prone as a Quick Action.
    
      - Some effects will force you to become prone (without requiring
        an action).
        
          - Like failing a SOM×3 check after being wounded, or being
            tripped.
    
      - Getting up from a prone position is a Quick Action.
    
      - While prone,
        
          - you may move up to half your base movement as a Standard
            Action;
          - melee attackers receive a +10 bonus against you, and
          - ranged attackers take a -10 penalty against you; and
          - most weapons are more difficult to use (-30 penalty to
            attack).

