# Design Version 1

1. Chinol is an online language academy. When a user enters:
- Accept cookies at the bottom of the page.
- Home page:
  - Introduction to Chinol
  - Online class demo
  - Book or try a class
  - Auto-test (registration required)

- Courses page:
  - SubPage showing all Chinese courses; click any card for more information about the course.
  - SubPage showing all Spanish courses; click any card for more information about the course.
  - Subpage for auto-test/quiz.
  - In the future, online courses will be available for direct purchase.

- Resources page:
  - Blog subpage (will be made with .md files)
  - Documents subpage (will contain materials)

- User profile page:
  - User information and settings

- User cart page:
  - Cart details

- Social media:
  - Discord
  - Telegram
  - WeChat

2. Define your data models (User, Course, Order, etc.)

# Database Schema
1. users: id, user_name, password (hashed), avatar, role, language, level, email
2. courses: id, title, description, price, img, category, duration, model
3. orders: id, user_id, course_id
4. materials: id, file, course_id
5. permission: TODO
