import { getPosts } from "./kubb/gen";

const main = async () => {
  const posts = await getPosts({}, {});

  console.log(posts);
};

main();
