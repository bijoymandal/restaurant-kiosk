// prisma/seed.js
import bcrypt from "bcrypt";
import pkg from '@prisma/client';
const { PrismaClient,Role } = pkg;

const prisma = new PrismaClient();

async function main() {
  // Clear old data
  await prisma.user.deleteMany();
  await prisma.orderItem?.deleteMany();   // optional if you have OrderItem model
  await prisma.menuItem.deleteMany();
  await prisma.menuCategory.deleteMany();





  // Create categories
  const categories = await prisma.$transaction(
    ['Burgers', 'Pizzas', 'Drinks'].map((name) =>
      prisma.menuCategory.create({ data: { name } })
    )
  );

  const map = Object.fromEntries(categories.map(c => [c.name, c.id]));

  // Seed items
  await prisma.menuItem.createMany({
    data: [
      { name: 'Cheese Burger',  description: 'Classic with cheese', price: 149.0, categoryId: map['Burgers'] },
      { name: 'Double Burger',  description: 'Two patties',         price: 199.0, categoryId: map['Burgers'] },

      { name: 'Margherita',     description: 'Simple cheese pizza', price: 179.0, categoryId: map['Pizzas'] },
      { name: 'Pepperoni',      description: 'Spicy and cheesy',    price: 229.0, categoryId: map['Pizzas'] },

      { name: 'Cola',           description: 'Cold drink',          price: 49.0,  categoryId: map['Drinks'] },
      { name: 'Lemon Iced Tea', description: 'Refreshing',          price: 79.0,  categoryId: map['Drinks'] },
    ],
    skipDuplicates: true,
  });

  //Seed Users
  await prisma.user.createMany({
    data: [
      {
        name: 'Admin Staff',
        email: 'admin@kiosk.com',
        phone: '9999999999',
        role: Role.STAFF,
        password: await bcrypt.hash('password@123',10)
      },
      {
        name: 'Kiosk Machine',
        email: 'kiosk@kiosk.com',
        role: Role.KIOSK,
        password: await bcrypt.hash('kioskpass',10)

      },
    ],
    skipDuplicates: true,
  });


  console.log('✅ Seeded MenuCategories & MenuItems and Users');
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
