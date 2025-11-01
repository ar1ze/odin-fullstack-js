# 🌎 Using Git in the Real World

### Introduction
Git basics are simple, but real-world use can be confusing. It's hard to "lose" data, but it can be hard to find. The best way to learn is through hands-on practice—running into an error and then Googling to find the solution. This lesson covers a real-world GitHub workflow used for open-source contributions.

---
### 📝 Lesson Overview
* A reminder about commit messages.
* Using Git to make open source contributions.

---
### 💬 Commit Messages for Collaboration
Good commit messages are crucial. **Conventional Commits** is a popular standard that helps make commit messages clear and descriptive, which is very helpful for collaborators.

---
### 🌊 Workflow Diagram
This workflow shows how changes flow between repositories during collaboration.

* **Key Players:**
    1.  **Upstream:** The original project's repository (e.g., `TheOdinProject/curriculum`). You do *not* have write access here.
    2.  **Origin:** Your fork of the repository on your own GitHub account. You *do* have write access here.
    3.  **Local:** The clone of your fork (`origin`) on your computer.

* **The Flow:**
    1.  You `fetch` changes from `upstream` to your `local` repository.
    2.  You work on a `feature_branch` locally.
    3.  You `push` your `feature_branch` to your `origin` (your fork).
    4.  You open a **Pull Request (PR)** from your `origin`'s feature branch to the `upstream`'s `main` branch.
    5.  Maintainers review and merge your PR into `upstream`.

---
### 🚀 Assignment: A Real-World Contribution Workflow
This is the process used by contributors to The Odin Project.

### 1. Initial Setup
---
1.  **Read:** Review the project's contributing guide.
2.  **Fork:** Use the "Fork" button on the `upstream` repository's GitHub page to create a copy (`origin`) under your own account.
3.  **Clone:** Clone *your fork* (`origin`) to your local machine.
    * `git clone git@github.com:your_user_name_here/curriculum.git`
4.  **Add Upstream Remote:** Inside the cloned project folder, add the *original* repository as a remote named `upstream`. This allows you to pull changes from it.
    * `git remote add upstream git@github.com:TheOdinProject/curriculum.git`

### 2. Ongoing Workflow
---
1.  **Create Branch:** Create a new feature branch for your changes.
    * `git checkout -b your_feature_name`
2.  **Make Commits:** Work on your feature and make good commits.
3.  **Get Updates:** When you're done, your local `main` branch is probably out of date. You need to update it from `upstream`.
    * `git fetch upstream`
4.  **Update Local `main`:** Switch to your `main` branch and merge the changes from `upstream/main`.
    * `git checkout main`
    * `git merge upstream/main`
5.  **Update Feature Branch:** This is the most important step for a clean PR. Switch back to your feature branch and merge your *updated* `main` branch into it.
    * `git checkout your_feature_name`
    * `git merge main`
6.  **Resolve Conflicts:** If you have any merge conflicts, resolve them now. This ensures your feature branch is clean and can be merged into `upstream`'s `main` branch without issues.

> **Note:** `git fetch upstream` followed by `git merge upstream/some_branch` is the same as `git pull upstream some_branch`. Fetching and merging separately is just more explicit.

### 3. Sending Your Pull Request
---
1.  **Push to Origin:** Push your clean feature branch up to your fork (`origin`) on GitHub.
    * `git push origin your_feature_name`
2.  **Open Pull Request:** Go to the `upstream` repository on GitHub. You will see a prompt to "Create Pull Request" from your recently pushed branch. Submit your PR to merge your feature branch into the `upstream`'s `main` branch.

> **⚠️ Warning:** Do not open a test/practice PR on a real project unless you have been assigned an issue. Such PRs are treated as spam.

---
### 🤔 Knowledge Check
* What name is typically given for a Git remote that points to a repo that’s been forked?
* Can you directly send your changes to a repository that you don’t own/have write access to?
* What should you do immediately before merging `main` into your feature branch?

---
### 🔗 Additional Resources
* Seth Robertson’s Git Best Practices
* Learn Git Branching (Interactive Tutorial)
* Dangit, Git!?! (Quick reference for common problems)
* How to undo (almost) anything with Git