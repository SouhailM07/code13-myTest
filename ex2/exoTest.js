const users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "17/05/2019 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "17/05/2019 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "17/05/2019 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "17/05/2019 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "17/05/2019 10:00 AM",
    isLoggedIn: false,
  },
];

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
      { userId: "Afaf", rate: 2 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

/* =============================== QUESTION =============================================
      
  Complete the functions below to make them work. You will find in each function a
  description of what it should do.

=========================================================================================== */

function signUp(newUser) {
  // Complete this function to add a new user to users array. Return true when done
  // If user already exists, return false
  for (let i of users) {
    if (newUser._id == i._id && newUser.username == i.username) {
      return false;
    }
    users.concat(users, newUser);
    return true;
  }
}

function signIn(email, password) {
  // Complete this function allow a user to sign in to the application.
  // If the user doesn't exist in users, return false
  // Return true if the user can sign in
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email && users[i].password === password) {
      return true;
    }
  }
  return false;
}

function rateProduct(productId, userId, rate) {
  // Complete this function to allow a user to rate a product
  for (let i = 0; i < users.length; i++) {
    if (users[i]._id === userId && users[i].isLoggedIn) {
      for (let x = 0; x < products.length; x++) {
        console.log(products[x]._id == productId);
        if (products[x]._id == productId) {
          products[x].ratings.push({ userId: userId, rate: rate });
        }
      }
    }
    console.log(products[0].ratings);
  }
}

rateProduct("eedfcf", "fg12cy", 7);

function averageRating(productId) {
  // Complete this function to get the average rating of a product
  let rate = 0;
  for (let i = 0; i < products.length; i++) {
    if (products[i]._id == productId) {
      for (let x = 0; x < products[i].ratings.length; x++) {
        rate += products[i].ratings[x].rate;
      }
    }
  }
  return rate;
}

function likeProduct(productId, userId) {
  // Complete this function to allow a user to like a product
  // If the user already liked the product, remove the like.
  for (let i = 0; i < products.length; i++) {
    if (productId === products[i]._id) {
      if (products[i].likes.includes(userId)) {
        products.likes.splice(
          products.likes[products.likes.indexOf(userId)],
          1
        );
      } else {
        for (let i = 0; i < products.length; i++) {
          if (products[i]._id === productId) {
            products[i].likes.push(userId);
          }
        }
      }
    }
  }
}
