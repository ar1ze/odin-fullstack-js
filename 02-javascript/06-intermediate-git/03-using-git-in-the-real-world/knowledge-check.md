### Knowledge Check Answers 🎯

***

**Question: What name is typically given for a Git remote that points to a repo that’s been forked?**

**Answer:** The remote that points to the original repository you forked is typically named `upstream`.

**Why:** This allows you to "fetch" and "pull" updates *from* the original project, while `origin` (the default) points to your personal fork (your copy) where you "push" changes.

**Remember:** `upstream` is where the code flows **from**; `origin` is where your work **originates**.

***

**Question: Can you directly send your changes to a repository that you don’t own/have write access to?**

**Answer:** No, you cannot push changes directly to a repository you don't have write access to (the `upstream`).

**Why:** You must first push the changes to your own fork (`origin`) and then open a **Pull Request (PR)**. This asks the maintainers of the `upstream` repository to review and merge your changes.

**Remember:** You can't write on their wall; you have to **request** 🤝 they pull in your work.

***

**Question: What should you do immediately before merging `main` into your feature branch?**

**Answer:** You must first update your local `main` branch by fetching and merging the latest changes from `upstream/main`.

**Why:** This makes your local `main` a perfect copy of the original project. Merging this updated `main` into your feature branch ensures you resolve any potential merge conflicts locally *before* submitting your pull request.

**Remember:** **Sync `main` first** (with `upstream`), then merge `main` into your feature.