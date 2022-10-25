let user = {
    name: "John",
    sizes: {
        height: 182,
        width: 50
    }
};

const user2 = JSON.parse(JSON.stringify(user))

user2.sizes.width = 88

console.log(user)
console.log(user2)

