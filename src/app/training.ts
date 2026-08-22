
function sum(a: number, b: number): number {
  return a + b;
}
sum(4, 5);

let uploadStatus: 'loading' | 'success' | 'error';

let textFormat: 'uppercase' | 'lowercase' | 'capitalize';

interface IUser {
  name: string;
  age: number;
  city?: string;
}

let user1: IUser = {
  name: 'Magomed',
  age: 37,
  city: 'Hasavyrt'
};

let user2: IUser = {
  name: 'Ruslan',
  age: 30
};


interface IStudent extends IUser {
  faculty: string;
}

let student: IStudent = {
  name: 'Murad',
  age: 25,
  city: 'Sochi',
  faculty: 'IT'
};

function formatString(text: string, format: 'uppercase' | 'lowercase' | 'capitalize'): string {
  if (format === 'uppercase') {
    return text.toUpperCase();
  }
  else if (format === 'lowercase') {
    return text.toLowerCase();
  }
  else {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
}

function removeChar(text: string, symbol: string): string {
  return text.replaceAll(symbol,"");
}

const users: IUser[] = [
  {
    name: 'Magomed',
    age: 37,
    city: 'Hasavyrt'
  },
  {
    name: 'Ruslan',
    age: 30
  },
  {
    name: 'Murad',
    age: 25,
    city: 'Sochi'
  }
];
const filteredUsers = users.filter((user) => {
  return user.age > 25;
});
console.log(filteredUsers);