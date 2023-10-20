import { ApiController } from "./controller.js";
const apiController = new ApiController();

apiController
  .fetchData()
  .then(data => {
    console.log("Result of fetching comments:", data.comments);
    console.log("Result of fetching posts:", data.posts);
  })
  .catch(error => {
    console.error(error);
  });

apiController
  .fetchFasterResult()
  .then(result => {
    console.log("The faster result is:", result);
  })
  .catch(error => {
    console.error(error);
  });
