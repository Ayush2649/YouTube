import React from "react";

const commenntsData = [
  {
    name: "Akshay Saini",
    comment: "Great video! Really helped me understand the concept better.",
    replies: [
      {
        name: "Akshay Saini",
        comment: "Great video! Really helped me understand the concept better.",
        replies: [],
      },
      {
        name: "Akshay Saini",
        comment: "Great video! Really helped me understand the concept better.",
        replies: [
          {
            name: "Akshay Saini",
            comment:
              "Great video! Really helped me understand the concept better.",
            replies: [],
          },
          {
            name: "Akshay Saini",
            comment:
              "Great video! Really helped me understand the concept better.",
            replies: [
              {
                name: "Akshay Saini",
                comment:
                  "Great video! Really helped me understand the concept better.",
                replies: [
                  {
                    name: "Akshay Saini",
                    comment:
                      "Great video! Really helped me understand the concept better.",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Akshay Saini",
    comment: "Great video! Really helped me understand the concept better.",
    replies: [],
  },
  {
    name: "Akshay Saini",
    comment: "Great video! Really helped me understand the concept better.",
    replies: [],
  },
  {
    name: "Akshay Saini",
    comment: "Great video! Really helped me understand the concept better.",
    replies: [],
  },
  {
    name: "Akshay Saini",
    comment: "Great video! Really helped me understand the concept better.",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, comment, replies } = data;
  return (
    <div className="flex p-2 bg-gray-100 rounded-lg my-2 gap-2">
      <img
        className="w-12 h-12 rounded-full"
        alt="user"
        src="https://imgs.search.brave.com/u4jVFIwegQrJWrijo-ejVSE2j22nfeprrCXIv00f8J0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTEv/MjMzLzQ5NC9zbWFs/bC91c2VyLWFjY291/bnQtY2lyY2xlLWds/eXBoLWljb24tdXNl/ci1wcm9maWxlLXBp/Y3R1cmUtdXNlcnBp/Yy1zaWxob3VldHRl/LXN5bWJvbC1uZWdh/dGl2ZS1zcGFjZS1p/c29sYXRlZC1pbGx1/c3RyYXRpb24tdmVj/dG9yLmpwZw"
      />
      <div className="">
        <p className="font-bold">{name}</p>
        <p>{comment}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border-l-2 border-gray-300 ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-2">
      <h1 className="text-xl font-bold">Comments: </h1>
      <CommentsList comments={commenntsData} />
    </div>
  );
};

export default CommentsContainer;
