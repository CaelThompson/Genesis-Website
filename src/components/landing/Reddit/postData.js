export const posts = [
    {
      id: 1,
      category: "all",
      username: "username",
      time: "2 hours ago",
      upvotes: 5,
      title: "Sample Blog Post Title",
      content: "This is the content of the blog post. It can contain text, links, images, and more. The layout is simple and easy to navigate, similar to Reddit posts.",
      comments: [
        {
          username: "anotheruser",
          time: "1 hour ago",
          content: "This is a comment on the blog post. Reddit-style comments allow for threaded discussions.",
        },
      ],
    },
    {
      id: 2,
      category: "technology",
      username: "techenthusiast",
      time: "1 day ago",
      upvotes: 12,
      title: "The Future of Genesis Company",
      content: "Genesis is paving the way for innovation in the tech industry. With its focus on cutting-edge solutions and a commitment to sustainability, the company is set to revolutionize the market. What are your thoughts on where Genesis is headed?",
      comments: [
        {
          username: "techenthusiast",
          time: "12 hours ago",
          content: "I think Genesis has a bright future, especially with their focus on AI and green technology. They're definitely a company to watch!",
        },
      ],
    },
    // Add more posts here...
  ];