const PersonProto =  {
  calcAge() {
    console.log(2037 - this.birtYear);
  }
}

const jack = Object.create(PersonProto);