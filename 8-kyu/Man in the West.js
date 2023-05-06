/*
DESCRIPTION:
A western man is trying to find gold in a river. To do that, he passes a bucket through the river's soil and then checks if it contains any gold. However, he could be more productive if he wrote an algorithm to do the job for him.

So, you need to check if there is gold in the bucket, and if so, return True/true. If not, return False/false.
*/

// eslint-disable-next-line no-unused-vars
function checkTheBucket(bucket) {
  return bucket.some((i) => i == "gold");
}

/*
function checkTheBucket(bucket) {
  return bucket.includes("gold") ? true : false;
}

describe("Basic tests", () => {
  Test.assertEquals(
    checkTheBucket(["stone", "stone", "stone", "stone", "stone"]),
    false
  );
  Test.assertEquals(
    checkTheBucket(["stone", "stone", "stone", "stone", "gold"]),
    true
  );
  Test.assertEquals(
    checkTheBucket(["gold", "stone", "stone", "stone", "stone"]),
    true
  );
  Test.assertEquals(checkTheBucket([]), false);
  Test.assertEquals(
    checkTheBucket(["stone", "stone", "stone", "gold", "gold"]),
    true
  );
});
*/
