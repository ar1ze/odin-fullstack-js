# 🧐 A Deeper Look at Git

### Introduction

Git is a crucial skill that acts as a "save" button on steroids and allows for seamless collaboration. This lesson helps visualize what’s happening under the hood by diving deeper than just `add`, `commit`, and `push`. We’ll cover Remotes, Pointers, and Changing Git History. As project work becomes more complex, a disciplined Git workflow is no longer optional.

-----

### 📝 Lesson Overview

  * History-changing Git commands.
  * Different ways of changing history.
  * Using remotes to change history.
  * Dangers of history-changing operations.
  * Best practices of history-changing operations.
  * Pointers.

-----

### 📜 Changing History

This is useful when you commit too early, miss a file, or make a typo in a commit message.

We will cover how to:

  * Change the most recent commit.
  * Change multiple commit messages.
  * Reorder commits.
  * Squash commits together.
  * Split up commits.

-----

### 🛠️ Getting Set Up

To perform certain Git commands like `git commit --amend` and `git rebase -i`, you must configure your code editor. By default, Git opens a command-line (CLI) text editor which can be confusing. You can follow the instructions in the "Git Basics" lesson to set up your preferred editor.

-----

### 1️⃣ Changing the Last Commit

  * **Command:** `git commit --amend`
  * **Use Case:** You forgot to add a file or need to fix the last commit message.
  * **How:**
    1.  Add the missing file(s) to the staging area: `git add <filename>`
    2.  Run the command: `git commit --amend`
  * **How it works:** This does *not* edit the last commit. It **replaces** it with an entirely new commit that includes the new changes.
  * **⚠️ DANGER:** Only amend commits that **have not been pushed** to a shared repository. Replacing a commit that other developers are basing their work on can destroy their work and cause major issues.

-----

### 🔢 Changing Multiple Commits

  * **Command:** `git rebase -i` (interactive rebase)
  * **Use Case:** Fixing typos, reordering, or editing commits further back in your history.
  * **How:**
    1.  Run `git rebase -i HEAD~2` (to edit the last 2 commits).
    2.  Git opens an editor. **Commits are listed in reverse order** (oldest on top).
    3.  Change the word `pick` to `edit` (or just `e`) for the commit(s) you want to modify.
    4.  Save and close the editor.
    5.  Git will stop at the commit you marked for `edit`.
    6.  Make your changes using `git commit --amend`.
    7.  Once satisfied, continue the rebase: `git rebase --continue`
  * **⚠️ DANGER:** This is a very powerful and dangerous tool. Be careful, and ensure your team is aware if you are using it on a shared branch.

-----

### 🤏 Squashing Commits

  * **Use Case:** Combining multiple small "work-in-progress" commits into one clean, single commit. This keeps the `main` branch history tidy and easier to read.
  * **How (using interactive rebase):**
    1.  Run `git rebase -i --root` (or `HEAD~3` to squash the last 3).
    2.  In the editor, mark the *first* (topmost) commit as `pick`.
    3.  Mark the subsequent commits you want to combine as `squash` (or `s`).
        ```
        pick e30ff48 Create first file
        squash 92aa6f3 Create second file
        ```
    4.  Save and close. Git will then open another editor asking you to write a new commit message for the combined commit.

-----

### ↔️ Splitting Up a Commit

  * **Use Case:** A single commit does too much (e.g., adds two separate features).
  * **How:**
    1.  Start an interactive rebase: `git rebase -i <commit-before-the-one-to-split>`
    2.  Mark the commit you want to split with `edit`.
    3.  Save and close. The rebase will stop.
    4.  Run `git reset HEAD~`. This "undoes" the commit, moving `HEAD` back by one, but **keeps all the changes in your working directory** and staging area.
    5.  Now, add and commit the files separately in new, smaller commits.
        ```
        git add test3.md && git commit -m 'Create third file'
        git add test4.md && git commit -m 'Create fourth file'
        ```
    6.  Finish the rebase: `git rebase --continue`

#### Understanding `git reset`

  * `git reset HEAD~` (or `--mixed`): Moves the `HEAD` pointer back one commit *and* updates the staging area (index) to match. Your working directory files are unchanged.
  * `git reset --soft HEAD~`: **Only moves the `HEAD` pointer**. The staging area and working directory are left as they were. (Useful for squashing.)
  * `git reset --hard HEAD~`: **DANGEROUS**. Moves `HEAD`, updates the staging area, *and* **overwrites your working directory** to match the commit. This can destroy uncommitted work.

-----

### 📍 Branches are Pointers

This is a core "under the hood" concept.

  * **Commit:** A "snapshot" of all your staged files at a moment in time.
  * **Commit (as pointer):** Each commit also points to the commit that came directly before it (its "parent").
  * **Branch:** A branch is **NOT** a group of commits. It is simply a **pointer to a single commit** (the most recent one in that line of history).
  * **HEAD:** A special pointer that keeps track of the branch you are currently on. It points *at the branch pointer* (e.G., `HEAD` -\> `main` -\> `e30ff48`).
  * **How `HEAD~2` works:** Git starts at `HEAD`, follows it to the current branch's pointer, follows that to the most recent commit, follows *that* commit's pointer to its parent (1), and follows *that* commit's pointer to its parent (2).

-----

### 📚 Assignment

  * Read the `git-scm` chapter on [Rebasing](https://git-scm.com/book/en/v2/Git-Branching-Rebasing).
  * Read the `git-scm` chapter on [Reset](https://git-scm.com/book/en/v2/Git-Tools-Reset-Demystified).

-----

### 🤔 Knowledge Check

  * How can you amend your last commit?
  * What are some different ways to rewrite history?
  * What does it mean for branches to be pointers?