---
title: "Basic Rules"
---

## The Rule(s) 0

  - When rounding, always round down.

  - Everything stacks unless it specifically says it doesn’t.
    
      - That is, if you have several bonuses or penalties, they all
        apply; you might assume this would be the case, but it’s worth
        pointing out, since some popular games don’t work that way.

## Checks

Checks are at the heart of Renaissance.

  - Roll D%, compare to *target*: succeed if less than or equal to
    target, fail otherwise
    
      - Conceptually, a D% is a dice that is numbered from 0 to 99. Such
        dice exist, but you can use anything that generates a number
        from 0 to 99 in an unbiased way—like two ten-sided dice, or a
        computer.
    
      - Be careful\! D% runs from 0 to 99, *not* 1 to 100\!
        
          - This means that if you’re using a computer random number
            generator and it gives you a result of 100, you should
            interpret that as 00 (which would also make it a critical
            *success,* see below).
    
      - Margin of Success (MoS) is die roll if success
    
      - Margin of Failure (MoF) is (die roll – target) if failure
    
      - targets vary, but are usually either skill checks or some
        combination of your aptitudes (see below).

  - Target Limits:
    
      - Your target can never be greater than 98; a 99 always fails, and
        is always a critical failure.
      - Your target can never be less than 0; a 0 always succeeds, and
        is a critical success.
      - If failure is impossible, simply waive the check, or use a
        Simple Check; if success is impossible, then simply declare that
        the character fails. See also When Should We Use Checks.

  - Special Results
    
      - if you succeed and your MoS is over 30, then you have scored an
        exceptional success.
      - If you succeed and your MoS is a “double”—that is, a multiple of
        11—then you have scored a critical success.
      - Likewise, if you fail and your MoF is over 30, then you have
        scored an exceptional failure, and if you fail and roll a
        double, then you have scored a critical failure.
      - The results of this vary: some rules will spell out exactly what
        happens, while other times, it will be up to the GM’s discretion
        to come up with an appropriate extra reward (for an Exceptional
        Success) or amazing bonus (for a critical success).
      - Sometimes, for clarity, we’ll call a success that is neither an
        exceptional or critical success a “normal success,” and we’ll
        call a failure that is neither an exceptional nor a critical
        failure a “normal failure”.

  - Upgrading and Downgrading.
    
      - Sometimes, you’ll be able to upgrade (or required to downgrade)
        a given check.
    
      - When you upgrade, your results are improved:
        
          - a critical failure or exceptional failure becomes a normal
            failure
          - a normal success becomes an exceptional success, and an
            exceptional success becomes a critical success.
    
      - When you downgrade, your results are degraded:
        
          - a critical success becomes an exceptional success, and an
            exceptional success becomes a normal success.
          - A critical or exceptional success becomes a normal success.
          - A normal failure becomes an exceptional failure, and an
            exceptional failure becomes a critical failure.
    
      - Note that, when upgrading, a normal failure does not become a
        normal success, and when downgrading, a normal success does not
        become a normal failure. That would be a little too powerful\!
    
      - Also, your MoS and MoF don’t actually change, so MoS- and
        MoF-dependent effects aren’t affected by upgrading and
        downgrading.
    
      - Upgrading and Downgrading are an exception to the “everything
        stacks” general rule: you can’t upgrade or downgrade any one
        test more than once.

  - Skill Checks:
    
      - skill checks are the most common type of check
      - the target is: the Linked Aptitude for the skill + your Ranks in
        the skill + any modifiers
      - For example, to if you have 40 ranks in Stealth, your
        Coordination (the linked aptitude for Stealth) is 20, and you
        have a magic cloak that gives you +20 to Stealth, then your
        target is 80; you would then roll a D100, and try to roll an 80
        or less. A 45 would succeed (Margin of Success: 45), while an 85
        would fail (Margin of Failure of 5).

  - Simple Checks: for a *simple* check, success is assumed, and you are
    only rolling to determine how well you do (for example, to determine
    how long you take, or how impressive your results are).
    
      - Commonly used when a character can simply try some task again
        and again until they succeed, or when the GM decides that a
        character could not reasonably fail at a given task.
      - In a Simple Check, compute the target the same way you would for
        a normal check.
      - If you roll less than or equal to your target, you *excel; *if
        you roll more than your target, you *stumble*. Come up with
        better words for this FFS.
      - If you *excel*, then you have achieved what you were trying to
        achieve, and done a good job of it\!
      - If you *stumble,* then you *still* achieve what you wanted, you
        just do so less dramatically; maybe you make some embarrassing
        mistake along the way, or it takes longer than expected.
      - Simple success checks can’t be be Exceptional or Critical.

  - Opposed:
    
      - used when two characters are opposing each other.
    
      - One character will *win*, and the other will *loose*.
    
      - Each character makes a (separate) check.
    
      - If one character succeeds and other fails check, the character
        who succeeded wins the check.
    
      - if both succeed, highest Margin of Success wins (reroll ties)
    
      - if both fail, reroll the check
        
          - For example, if a character is trying to outrun a pursuer,
            an Opposed Test might be called for, using both character’s
            Athletics.
          - Suppose that Alice (who has 30 Somatics and 30 ranks in
            Athletics) is chasing Bob (who has 25 Somatics and 40 ranks
            in Athletics). Alice rolls her D100, and gets a result of
            32; this is less than her target of 60, so she succeeds,
            with a Margin of Success of 32. Bob, however, rolls a 73,
            which is greater than his target of 65; bob has failed, with
            a Margin of Failure of 8. Alice has won the check, and might
            catch up to Bob.
    
      - The two characters don’t have to use the same skill – very
        often, they won’t\!
        
          - For example, if someone impersonating a servant is trying to
            talk their way past a palace guard, then an opposed test
            between the impostor's Disguise and the guard’s Read skills
            would be appropriate.
    
      - Ordered Checks: Sometimes, it only makes sense to call for one
        character’s check if the other character has already succeeded;
        in this case, one character should roll first, and the other
        character should only roll their check if it is needed. We call
        this an *Ordered* check.
    
      - Variable Checks: Sometimes, it’s possible for both characters to
        succeed on a task. When this happens, if both characters succeed
        on their checks, instead of declaring the highest MoS to be the
        winner, both characters should be awarded a partial success. We
        call this a *Variable* check.
        
          - For example, if a character is trying to sneak past a guard,
            a Variable check might be called for, pitting the sneaking
            character’s Stealth against the guard’s Perception. If both
            characters succeed, the GM might rule that the guard hasn’t
            spied the sneaking character directly, but has noticed some
            disturbance they left behind – perhaps a window they left
            open, or some furniture they disturbed – and has begun
            looking for an intruder.

  - Defaulting
    
      - Sometimes, you don’t have the specific skill that you’d need to
        make a check—for example, you might be trying to argue a legal
        case, but most relevant skill you have is Barter, or you might
        be trying to sneak past a guard without any ranks in Stealth.
    
      - In these cases, you might be allowed to use a *related* skill at
        a penalty—or you might be allowed to use the aptitude that is
        linked to the skill that you don’t have. We call this
        *defaulting*.
        
          - The GM decides whether or not you can default, and what you
            will default to.
          - In the first case, the GM might decide that you can
            *attempt* to use your skills as a trader to handle a legal
            negotiation, and allow you to roll your Barter with a -30
            penalty. (Large penalties are often expected, as you are
            cheating the skill system a bit—if you’d wanted to be good
            at legal wrangling, you should have put ranks in Protocol,
            after all.)
          - In the second case, the GM might allow you to roll a check
            against your COO (that is, COO×1), since anybody can *try*
            to move stealthily, trained sneak-thief or no. If you
            default to a base aptitude, there usually isn’t also a
            penalty for defaulting—you’re in enough trouble
            already\!—although other modifiers would apply as normal.

<aside class="gmguidance">
Sidebar: When should we use checks?
    
  - When is a check called for, and what type? This depends on the situation.
  - In unstructured play, the type of *consequences* that the GM expects often determine the kind of check to use. If a check could have major consequences (like an attempt to hide an item you stole from the king while being searched by a guard), then a check is definitely called for. However, if the odds of failure are low, or the consequences of failure aren’t interesting, then Simple Checks might be used, or the check might be waived all-together.
  - Notably, most mundane actions don’t require checks. A character can make the half-day’s walk to a neighboring town, cook a meal or speak in a language they know without requiring a check.
  - The rules for Initiative Order and Combat are more specific; in combat, the exact series of checks to use will usually be specified by the rules for combat, and the items and powers in use.
  - Similarly, Down Time has more specific rules; see the rules for Down Time.
</aside>

  - Sidebar: Trying Again
    
      - Sometimes, if a player fails a check, they will simply be able
        to try again rather than having the player roll the same check
        repeatedly—or *allowing* the same player to simply make repeated
        attempts until they succeed—it is often a good idea to use a
        *simple success check*.
      - As an example, if a character wants to make several Healing
        Potions, while one might have them make several individual
        Craft: Alchemy checks, it would likely be a better idea to have
        them make one Craft: Alchemy simple success check representing
        several hours work, and use the result to determine how many
        potions they were able to make.
      - Similarly, if the players are trying to solve a riddle that will
        open a magic door, but there is nothing that would stop them
        from simply trying again and again, it might be a better idea to
        use one simple success check to find out how long it takes them
        to solve the riddle.
      - As an optional rule, in a situation where individual checks are
        called for, in order to prevent abuses, GMs may apply a
        cumulative -10 penalty for each time a player *tries again*.
        This makes some sense, as a character that failed a check
        presumably failed for a reason, and that reason likely still
        applies if circumstances have not changed.

  - Sidebar: Repeated Individual Skill Checks
    
      - Sometimes, there are situations where several members of the
        party could attempt the same task in sequence; for example, if
        the players are trying to search a room, then each person could
        make their own Search test, one after the other.
      - This is usually not a good idea; this makes it very difficult
        for the party to fail, since they’ll have several separate
        attempts; it makes each individual test less interesting, since
        the next person will just try if the current person fails; and
        it can slow the game down dramatically.
      - Instead, we recommend the GM require one character make one test
        on behalf of the party; that character—usually the one with the
        highest rating in the skill in question—should “take the lead,”
        and the other party-members should assist (if they can, see
        *Skill Modifiers*).

### Picking a Check

So, you’ve decided that a check is called for—but what check should you
use? Sometimes it can be tricky to decide.

One question to ask yourself is, “is the thing my character is doing the
kind of thing that someone could have *learned* how to do, coming from
their background?” Plenty of things are, like riding a horse, bartering
with a bar-keep, sneaking through a dark alley, or negotiating a
treaty—but, some things *aren’t*, like fighting off a disease (which
people don’t learn to do—or do consciously at all\!) or solving a
mystery (“detective” is certainly a job a person could learn to have,
for example, but it is not a common one in the world of *Renaissance*).

In the first case—for something that someone could have learned to do—a
skill check is appropriate. Note that you don’t necessarily have to pick
one single, correct skill; the skill system has a degree of overlap, so
your players might have more than one skill they could choose from. It’s
also perfectly acceptable to ask them what skills they have that they
think might apply, and to vary the results they get based on which skill
they ultimately. For example, if Ven has both Knowledge: Natural
Philosophy and Spellcraft, she could use either to attempt to analyze a
note with strange, technical writing on it, and she might glean
different insights from it based on which she decides to use.

In the second case—the player is trying to do something that most people
don’t need to learn to do, or do consciously at all—a check against some
combination of aptitudes is usually the right idea. You can pick from
the *sample checks *above, or make up your own. To pick the combination
of aptitudes you want to use, think about the mental faculties (or
physical properties) that they’re going to need to succeed. If
self-control is important, WIL should be included; if quick reflexes
help, COO should be a factor; if their physical resiliency is being
tested, then DUR can be used; and so on. Most of the time, it’s a good
idea to mix 2 or 3 aptitudes.

Note that some rules reference types of sample checks specifically. For
example, some traits give you bonuses to *resist fear* or *feats of
strength *checks. It’s a good idea to let players keep the benefits of
those traits (for example) on checks that could reasonably be called a
*feat of strength*, even if you don’t use the *feat of strength* check
as it’s listed. (A player might ask, “is this a feat of strength?”, or
you could tell them to “roll SOM×2, as a feat of strength” or
“feat-of-strength effects apply”.)

In unusual cases, you can have players make a check against a single
aptitude (as in, a WIL×1 check). Such a check is very difficult to pass,
and thus should represent a powerful force (like a spirit). However, it
is worth noting that very powerful beings like spirits might produce
magical effects that cannot be resisted at all; not every effect has to
allow a player to check to resist.

You also *can* have players mix aptitudes in more complex ways—having
people use four aptitudes and divide by two, for example—but this is
almost always a bad idea, since the increase in complexity is pretty
much never worth the increase in fidelity (that is, in better
representing just exactly what is being tested).

In the last case—a player is trying to do something that isn’t covered
by a skill that they have, possibly a skill that it would be unusual for
anyone to have—you can allow a player to *default* (see above), either
to a related skill that they do have, or to the aptitude that would be
linked to the skill they don’t have. Don’t rush *too* quickly to the
decision that a character needs an exotic skill; if the player is trying
to do something that someone in the Commonwealth could reasonably have
learned to do, then they shouldn’t need an exotic skill.

The reverse, of course, can also be true; if the skill-set the character
is trying to have is bizarre, unusual and difficult-to-explain for
someone from the Commonwealth, then it probably should have been an
exotic skill. Somewhere, someone in the Commonwealth *could possibly* be
working on a Babbage Engine, and so a player character *could possibly*
take ranks in Exotic Skill: Programming—but programming a Babbage Engine
certainly isn’t covered by either Knowledge: Math or Craft: Clockwork.
This is why players should discuss their characters with their GMs
before starting play.

### Common Checks

  - Skill Check: Aptitude Linked to Skill + Ranks in Skill
    
      - specialization and proficiency may also apply, see below.

  - Resist Intimidation / Overcome Fear: WIL × 2

  - Resist Social Manipulation: SAV + INT

  - Recall Personal Experience: COG × 3

  - Take a Chance, Get Lucky: Luck × 10
    
      - That’s the Luck stat, not your current Luck Points

  - Make A Guess (or Get a Hint): INT × 3

  - Solve a Logic Puzzle: COG × 3

  - Feat of Strength (bend bars, break down a door): SOM + STR

  - Feat of Endurance (endure a long march, resist disease, survive
    starvation): DUR + WIL

  - React Quickly: COO×3

  - Catch Something: COO×3

  - Difficult use of Language: INT×3

### Modifiers

  - Being assisted: +10 per character assisting, maximum +30. Assisting
    characters must have 10 Ranks in a useful skill (but it doesn't have
    to be the *same* skill). The GM may rule that certain tests cannot
    be assisted.
    
      - Attack, Stealth and Perception tests normally cannot be
        assisted.

  - Related Skill:
    
      - receive a bonus on one Test for having ranks in a related skill
        (for example, Knowledge: Theology might assist Profession:
        Cleric)
      - 10-24 Ranks: +10
      - 25-39 Ranks: +20
      - 40+ Ranks: +30
      - You may only use one related skill.

  - Specialization:
    
      - skills can have *specializations*.
    
      - Character recieves +10 when Specialization applies; there is *no
        effect *(including *no penalty*) when Specialization does not
        apply
    
      - Any given skill can only have one specialization. You can’t have
        both a \[Short Swords\] and a \[Knives\] Specialization for
        One-Handed Weapons, for example.
    
      - You can acquire specializations for your skills during character
        creation: see also *Character Creation*.
    
      - Field Skills and Proficiency Skills can also have
        specializations, for example:
        
          - Art: Painting \[Landscapes\], where Art is a field skill,
            Painting is the field, and \[Landscapes\] is the
            specialization.
          - One-Handed Melee Weapons \[Swords\], where Swords is one of
            the proficiencies that the character has.

  - Difficulty Modifiers
    
      - Run from Very Easy (+30) to Very Hard (-30), and all shades
        in-between.

  - Taking your Time and Rushing:
    
      - only applies to Task Actions and Jobs
      - Taking your Time: for every +50% increase in timeframe, +10 to
        the check (up to +150% time for +30)
      - Rushing: for every -25% *reduction* in timeframe, -10 to the
        check (up to -75% for -30)

  - Situational Modifiers
    
      - Lots of other things might provide modifiers\! The GM may assign
        modifiers from situation as appropriate.

  - Passive Tests: Usually, characters will use their skills actively.
    Sometimes, the GM will roll a test on behalf of the player—for
    example, to see if they have noticed something (a Perception test),
    realized something (a COG\*3 test), or has some piece of knowledge
    (a Profession, Craft or Knowledge check). These are *Passive Tests*,
    since they are made “automatically” on the player’s behalf. Passive
    checks have a -20 penalty (the players should be proactive in using
    their skills, after all). Generally, Passive tests are made in
    secret by the GM; if a player later makes an appropriate test, then
    the result of the test that the player made takes precedence
    (although events may unfold in such a way that a player cannot call
    for such a check later).

  - Common Knowledge: if a player has 10 or more ranks in a given skill,
    they can be assumed to have common knowledge appropriate to that
    skill (that is, without being required to make a test).

## Actions

Types of actions

  - Standard actions
    
      - An action that doesn’t take much time, but that you need to
        focus on.
      - Examples: attacking with a weapon, knocking over a dresser,
        kicking in a door.

  - Quick actions
    
      - An action that doesn’t take much time, and that you don’t need
        to focus on.
      - Examples: moving, yelling something, retrieving a stored item,
        drawing a weapon.

  - Task actions
    
      - An action that takes time (but less than a day), and that you
        need to focus on.
      - Examples: brewing a potion, picking a lock, buying goods in town
      - Note: Tasks that take 8 hours of work or more should generally
        be handled as Jobs and done during Down-Time.

  - Sustained actions
    
      - An action that takes time, but that you don’t need to focus on,
        so you can do it while doing something else.
    
      - Examples: keeping an eye out for a mark during an opera, leaving
        a trail of bread-crumbs while traveling, memorizing a route
        while being forced to march, *sustaining powers.*
    
      - You can take other actions while maintaining a Sustained Action,
        and you can maintain more than one Sustain action at a time.
        
          - However, maintaining multiple Sustained Actions is
            distracting; you take a -10 penalty to all tests for each
            Sustained Action you maintain beyond the first.
          - So, for example, if you maintain three Sustained Actions,
            you take a -20 penalty to all tests.
    
      - Sustain actions don't have a specific upper limit for how long
        you can maintain them, but your GM might not allow you to
        maintain them for more than a reasonable amount of time, or
        might require additional checks or impose additional
        consequences.

  - Jobs
    
      - Jobs have time-frames measured in *shifts.* A shift is one
        continuous eight-hour work day.
      - Used mainly during Down-Time Play

  - Since the MoS (and MoF) of a test can determine how long an action
    takes, If a Task Action or Job requires a check, that check should
    be made when the action is *begun.*
    
      - If the check is failed, the character in question works for 25%
        of the Task Action’s timeframe or Job’s shifts (on a Failure),
        or 50% (on an Exceptional Failure), before realizing that the
        task will fail (and, presumably, stopping).

## Modes of Play

Renaissance has the following modes of play

  - Unstructured: the “normal” mode, which works like a conversation
    with the GM
    
      - GM describes scene / situation
      - players ask questions, declare actions
      - GM answers questions, resolves player actions; often calls for
        tests.
      - As the name implies, no particular rules about action allotment
        (as opposed to Turn Order and Down-Time). However, the GM may
        limit the actions allowed in a given situation (for example, you
        can’t try to build a tool as a one-hour Task Action if you’re in
        a building that’s burning down.)

  - Turn Order: each player rolls *initiative*, and gets a turn in order
    of their initiative (Highest initiative roll first, and then in
    descending order. GM breaks ties arbitrarily, but generally a good
    idea to let highest base-initiative go first.)
    
      - Initiative is 1d10 + *Initiative Modifier*. The GM will pick an
        appropriate *Initiative Modifier*.
    
      - Each turn should have a specific *action allotment*, which the
        GM will pick when Turn Order play is begun.
        
          - If the GM includes Task Actions in the action allotment,
            then the GM should specify *how much time* a character can
            contribute to a Task Action – for example, “Five minute task
            actions”.
          - If the GM doesn’t include Task Actions in the action
            allotment, then progress towards Task Actions are not
            tracked; a player who wishes to continue working on a Task
            Action simply looses their turn(s).
          - Likewise, Jobs aren’t tracked during Turn Order; a player
            who wants to keep working on a Job during Turn Order simply
            looses their turn(s).
    
      - Combat is a special case of Turn Order play, with extensive
        rules; see *Combat*.

  - Down-Time: focuses on long-term actions. Down-Time is measured in*
    *days. On any day, a character can spend 8 hours working on a Job;
    if they do, that Job is one Shift closer to being complete.
    
      - Your GM might allow you to work more or less time, and to earn
        shifts slower or quicker; this is entirely at GM discretion.
        
          - In particular, races that don’t need to sleep have an
            obvious opportunity to earn more than one Shift in a day.
    
      - As an alternative to working on a Job, a player can spend a day
        to complete one or more task actions (recall that Task Actions
        should take less than 8 hours, so you should always be able to
        finish at least one Task Action per day).

  - Sidebar: Interrupting Actions
    
      - Sometimes it’s possible to interrupt an action—if one character
        breaks into the workshop where another character is working, for
        example. We don’t provide fixed rules for this, because no set
        of rules could be comprehensive without being unwieldy. GMs are
        encouraged to adjudicate such situations as they arise.

