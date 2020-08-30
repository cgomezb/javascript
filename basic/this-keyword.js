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
  console.log(this);
}

run.call({ name: 'Cesar'}, 1, 2);
run.apply({ name: 'Cesar'}, [1, 2]);
run.bind({ name: 'Cesar'})();

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