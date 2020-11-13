// method => obj

const video = {
  title: "a",
  play() {
    console.log(this);
  },
};

video.stop = function () {
  console.log(this);
};

video.play();
video.stop();

/* Using new operator */
function Book(title) {
  this.title = title;
  console.log(this);
}

// new X
// 1 => {}
// 2 => {} <= this
// 3 => { title }

const myBook = new Book("Harry Potter 1");

// function => global (window, global)

function test() {
  console.log(this);
}

test();

/* Another example */

const blog = {
  title: "My blog",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach(function (tag) {
      // console.log(this.title, tag);
      console.log(this, tag);
    });
  },
};

blog.showTags();

const blog1 = {
  title: "My blog",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach(function (tag) {
      console.log(this.title, tag);
    }, this);
  },
};

blog1.showTags();

const blog2 = {
  title: "My blog",
  tags: ["a", "b", "c"],
  showTags() {
    const self = this;
    this.tags.forEach(function (tag) {
      console.log(self.title, tag);
    });
  },
};

blog2.showTags();

/* Changes this keyword */

function run(a, b) {
  console.log(this, a, b);
}

run.call({ name: 'Cesar'}, 1, 2);
run.apply({ name: 'Cesar'}, [1, 2]);
run.bind({ name: 'Cesar'}, [1, 2])();

run();

/* So... */

const blog3 = {
  title: "My blog",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach(function (tag) {
      console.log(this.title, tag);
    }.bind(this));
  },
};

blog3.showTags();

/* But ECMA script 6 */

const blog4 = {
  title: "My blog",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach(tag => console.log(this.title, tag));
  },
};

blog4.showTags();

/* Additional Examples */

const blog = {
  title: 'This is my blog',
  tags: ['tag 1', 'tag 2', 'tag 3'],
  showTitle() {
    console.log(this); // blog reference
  },
  showTagsV1() {
    this.tags.forEach(function (tag) {
      console.log(this, tag); // window reference
    })
  },
  showTagsV2() {
    this.tags.forEach(function (tag) {
			console.log(this, tag); // blog reference
    }, this);
  },
  showTagsV3() {
    this.tags.forEach(function (tag) {
			console.log(this, tag); // blog reference
    }.bind(this));
  },
  showTagsV4() {
  	const self = this;
    this.tags.forEach(function (tag) {
			console.log(self, tag); // blog reference
    });
  },
  showTagsV5() {
    this.tags.forEach((tag) => {
			console.log(this, tag); // blog reference
    });
  }
}

blog.showTitle();
blog.showTagsV1();
blog.showTagsV2();
blog.showTagsV3();
blog.showTagsV4();
blog.showTagsV5();


const shape = {
  radius: 10,
  perimeter: () => {
    debugger
    return (2 * Math.PI * this.radius);
  }
};

console.log(shape.perimeter());
