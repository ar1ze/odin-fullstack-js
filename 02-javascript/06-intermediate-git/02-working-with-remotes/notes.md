# 📡 Working with Remotes

### Introduction
You've already been working with remote repositories (pushing and pulling) on your projects. This lesson covers more advanced topics you may not have encountered yet, specifically related to changing history on a remote.

---
### 📝 Lesson Overview
* Using remotes to change history.
* Dangers of history-changing operations.
* Best practices of history-changing operations.

---
### 🚀 Force-pushing with Git
Normally, Git stops you from pushing if your local branch is outdated compared to the remote. This is a **safety mechanism** to prevent you from overwriting commits from your collaborators.

You might find the command `git push --force`. This command **overwrites the remote repository with your own local history.**

> **⚠️ DANGER:** This is a very dangerous command. If you have rewritten history locally (e.g., with `rebase`) and then you force-push, you can permanently destroy commits on the remote. This could **delete the work of those you’re collaborating with!**

---
### ✅ Safe Alternatives to Force-Pushing

#### Scenario 1: Your local branch is outdated.
* **Problem:** You try to `git push`, but Git gives you an error because your history is outdated.
* **Safe Solution:** Update your local history by using `fetch` and `merge`, then attempt to `push` again.

#### Scenario 2: You pushed a bad commit.
* **Problem:** You just pushed a commit, but you realize it has a mistake and you want to "undo" it.
* **Dangerous Solution:** `git reset HEAD~`, `git push --force`.
* **Safe Solution:** `git revert HEAD`
    * This command creates a **new commit** that undoes the changes from the previous commit.
    * You can then safely `git push` this new "revert" commit. This is the correct way to undo changes on a shared branch.

---
### 🛡️ The "Safer" Force-Push: `git push --force-with-lease`
If you *must* force-push (e.g., to update a pull request branch you are working on alone), this is the preferred command.

* `git push --force-with-lease` is a **fail-safe**.
* It checks if the remote branch has been updated by anyone else since you last fetched.
* If it *has* been updated, the push will fail, giving you a chance to fetch, rebase, and avoid overwriting someone else's new work.

---
### ☠️ Dangers and Best Practices
The common thread among commands like `commit --amend`, `rebase`, `reset`, and `push --force` is that they **rewrite history**. This is extremely dangerous when collaborating.

#### Best Practices
* **Communicate!** If you must rewrite history on a team project, make sure it's safe and **others know you’re doing it.**
* **Work Locally:** Ideally, stick to using these commands only on branches that **you are working with by yourself.**
* **Be Cautious:** Using the `-f` (force) flag should scare you. You must have a very good reason for using it.
* **Avoid Published History:** Don't push after every single commit. Changing *published* (pushed) history should be avoided whenever possible.

#### Specific Command Rules
* **`git commit --amend`**: Never amend commits that have already been **pushed** to a remote.
* **`git rebase`**: Never rebase a repository or branch that **others may work off of**.
* **`git reset`**: Never reset commits that have already been **pushed**.
* **`git push --force`**: Only use it when you are certain it's appropriate. Preferably, default to using `git push --force-with-lease`.

---
### 📚 Assignment
* Read through GitHub’s documentation on **merge conflicts**. You will run into them.
* Read the entirety of **Think Like (a) Git** to solidify your understanding.

---
### 🤔 Knowledge Check
* What is a safe way to forcefully push history changes to a remote repository?
* What are the dangers of history-changing operations?
* What are best practices of history-changing operations?