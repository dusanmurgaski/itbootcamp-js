let blog = {
    title: "Objekti",
    content: "Ovo su objekti",
    author: "Dusan"
};

console.log(blog);
console.log(typeof blog);

let x = 5555;
console.log(typeof x);



// Pristup osobini/propertiju u objektu
console.log(blog.title);
console.log(blog[`author`]);
// promena osobina objekta
blog.author = "jeca";
console.log(blog[`author`]);

/////////////////////////////////////////////

let user = {
    username: "dm",
    age: 19,
    blogs: ["neo", "bizz", "falafel"],
    login: function () {
        console.log('Ulogovani ste');
    },
    logBlogs: function () {
        //console.log(this.blogs);
        this.blogs.forEach(blog => {
            console.log(blog);
        });
    },
    test: function () {
        console.log(this);
    }
};

console.log(user);
user.login();
user.logBlogs();
user.test();
console.log(this);