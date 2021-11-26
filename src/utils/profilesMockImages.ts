const images = [
  'https://scontent.fcgh23-1.fna.fbcdn.net/v/t39.30808-6/239936215_1699321796936012_8200878365662616337_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=973b4a&_nc_ohc=Qol3hfXVQUsAX9v7Nuv&_nc_ht=scontent.fcgh23-1.fna&oh=da4168ceb8ce2cce542df05e38550c19&oe=61A662EA',
  'https://i.pinimg.com/474x/83/9a/08/839a0809148a30d5ac5a835dd90cb79f.jpg',
  ' https://media.istockphoto.com/photos/french-bulldog-dog-dressed-up-with-funny-cactus-halloween-dog-costume-picture-id1265423653?b=1&k=20&m=1265423653&s=170667a&w=0&h=WW8Ljl6whIW5aGeAtnO4oKrGyqtNnGCaoa9IAZV7TUY=',
  'https://media.istockphoto.com/photos/french-bulldog-dog-dressed-up-with-funny-cactus-halloween-dog-costume-picture-id1265423653?b=1&k=20&m=1265423653&s=170667a&w=0&h=WW8Ljl6whIW5aGeAtnO4oKrGyqtNnGCaoa9IAZV7TUY=',
  'http://st2.depositphotos.com/2927537/7025/i/450/depositphotos_70253417-Funny-monkey-with-a-red-lips.jpg',
  'https://www.rd.com/wp-content/uploads/2018/02/25_Hilarious-Photos-that-Will-Get-You-Through-the-Week_280228817_Doty911.jpg?fit=640,800',
  'https://bestlifeonline.com/wp-content/uploads/sites/3/2018/04/Trapped-in-Toilet.jpg?quality=82&strip=all',
  'https://i.ytimg.com/vi/cUqiERdIt8I/mqdefault.jpg',
]

export const getProfileImage = () => {
  return images[Math.floor(Math.random() * images.length)]
}
