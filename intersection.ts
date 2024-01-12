// Product, User, Review 타입은 id 속성을
// User, Review 타입은 createdAt, updatedAt 속성을 공통으로 가지고 있음
/*
interface Product {
  id: string;
  name: string;
  price: number;
  membersOnly?: boolean;
}

interface User {
    id: string;
    username: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
}

interface Review {
    id: string;
    productId: string;
    userId: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
}
 */

// 공통 속성을 새로운 interface로 만들어 intersection을 사용할 수 있음
interface Id {
  id: stirng;
}

interface Timestamp {
  createdAt: Date;
  updatedAt: Date;
}

type Product = Id & {
  name: string;
  price: number;
  membersOnly?: boolean;
};

type User = Id &
  Timestamp & {
    username: string;
    email: string;
  };

type Review = Id &
  Timestamp & {
    productId: string;
    userId: string;
    content: string;
  };

/* interface 상속으로 만들 수도 있다. */
interface Entity {
  id: string;
}

interface TimestampEntity extends Entity {
  createdAt: Date;
  updatedAt: Date;
}

interface Product extends Entity {
  name: string;
  price: number;
  membersOnly?: boolean;
}

interface User extends TimestampEntity {
  username: string;
  email: string;
}

interface Review extends TimestampEntity {
  productId: string;
  userId: string;
  content: string;
}

/* 중복되는 속성이 있어도 병합 가능하다 */
interface Equipment {
  id: string;
  name: string;
  price: number;
}

interface Weapon extends Equipment {
  attack: number;
}

interface Armor extends Equipment {
  defence: number;
}

function printEquipment(equipment: Weapon & Armor) {
  console.log(`이름: ${equipment.name}`);
  console.log(
    `이 장비는 공격력을 ${equipment.attack}, 방어력을 ${equipment.defence} 증가 시킵니다.`
  );
}

const item1: Weapon & Armor = {
  id: "g001",
  name: "서리불꽃 글러브",
  price: 100,
  attack: 5,
  defence: 42,
};

printEquipment(item1);

// 두 가지 중 어떤 방법을 사용해야 할까?
