// 1 Завдання

const user = {
    hobby: "karate",
    premium: true,
  };
  
  user.mood = "happy";
  
  user.hobby = "skydiving";
  
  user.premium = false;
  
  const keys = Object.keys(user);
  for (const key in user) {
    const information = `${key}: ${user[key]}`;
    console.log(information);
  }
  
// 2 Завдання

