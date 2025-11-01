### Knowledge Check Answers 🎯

-----

**Question: How can you amend your last commit?**

**Answer:** You can amend your last commit using the `git commit --amend` command.

**Why:** This command lets you add new staged changes to your previous commit or simply edit the last commit message. It works by replacing the old commit with an entirely new one.

**Example:** If you forgot a file:

```bash
git add forgotten-file.txt
git commit --amend
```

**Remember:** `amend` means to **fix** or **add to** your last "save".

-----

**Question: What are some different ways to rewrite history?**

**Answer:** The main ways are amending the last commit (`git commit --amend`), using an interactive rebase (`git rebase -i`), and resetting (`git reset`).

**Why:** These tools let you change past commits. `amend` only changes the last one, while interactive rebase is very powerful, letting you `squash` (combine), `reorder`, `edit`, or `split` multiple commits.

**Remember:** `amend` fixes the last one; `rebase` fixes many.

-----

**Question: What does it mean for branches to be pointers?**

**Answer:** It means a branch is just a simple, movable label that points to one single, specific commit.

**Why:** A branch isn't a folder containing commits; it's more like a **bookmark**. When you make a new commit, Git just moves that branch's bookmark to point to your new "save" (commit).

**Example:** The `main` branch is just a pointer to the newest commit in that line of history. `HEAD` is another special pointer that points to the branch you are currently on.