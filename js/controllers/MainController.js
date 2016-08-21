app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.specialsforone = [
    {
      description: 'Two slices of one-topping pizza, side salad & drink',
      price: 8.75
    },
    {
      description: 'One slice of one-topping pizza, fries & drink',
      price: 3.75
    },
    {
      description: 'One 9" cheese steak or sub, side of fries & a drink',
      price: 9.75
    }
  ];

  $scope.specialsfortwo = [
    {
      description: 'Large two-topping pizza & two soft drinks',
      price: 13.99
    },
    {
      description: 'Large one-topping pizza, order of cheese fries & two liter drink',
      price: 17.25
    },
    {
      description: 'Large one-topping pizza & two liter drink',
      price: 10.75
    },
    {
      description: 'Two 9" cheese steaks, two fries & two drinks',
      price: 17.25
    },
    {
      description: 'Two baked spaghetti dinners with salad & bread',
      price: 17.00
    },
    {
      description: 'One baked spaghetti dinner, one lasagna dinner, salad & bread',
      price: 17.00
    },
    {
      description: 'Two baked ziti dinners with salad & bread',
      price: 17.00
    }

  ];

  $scope.specialsfortwoplus = [
    {
      description: 'Bennett Special: Large one-topping pizza, order of cheese fries & two liter drink',
      price: 16.25
    },
    <!-- TODO come up with 2+ suggestions? -->

  ];

  $scope.appetizers = [
    {
      name: 'Cheese Sticks',
      description: 'Breaded Mozzarella sticks.',
      price: 4.75
    },
    {
      name: 'Chicken Fingers',
      description: 'Breaded chicken tenders with sauce of your choice.',
      price: 4.75
    },
    {
      name: 'Jalapeno Poppers',
      description: 'Breaded jalapenos (12 ct.)',
      price: 5.25
    },
    {
      name: 'Cheese Fries',
      description: 'Fries covered in Mozzarella cheese and bacon bits, served with ranch.',
      price: 4.75
    },
    {
      name: 'Bread Sticks',
      description: 'Garlic bread sticks (6 ct.)',
      price: 1.75
    },
    {
      name: 'Cheese Garlic Bread',
      description: 'Garlic cheese bread.',
      price: 3.75
    },
    {
      name: 'Pickle Bread',
      description: 'Fresh pickle bread.',
      price: 5.25
    },
    {
      name: 'Mix Fries',
      description: 'Mozzarella, pick, and mushrooms.',
      price: 6.75
    }

  ];

    $scope.wings = [
      {
        description: '6ct.',
        price: 5.25
      },
      {
        description: '12ct.',
        price: 8.75
      },
      {
        description: '24ct.',
        price: 15.75
      },
    ];

    $scope.pizzas = [
      {
        name: 'Cheese',
        smPrice: 8.75,
        mdPrice: 9.75,
        lgPrice: 10.75
      },
      {
        name: '1 Topping',
        smPrice: 8.75,
        mdPrice: 9.75,
        lgPrice: 10.75
      },
      {
        name: '2 Topping',
        smPrice: 8.75,
        mdPrice: 9.75,
        lgPrice: 10.75
      },
      {
        name: '3 Topping',
        smPrice: 8.75,
        mdPrice: 9.75,
        lgPrice: 10.75
      },
      {
        name: '4 Topping',
        smPrice: 8.75,
        mdPrice: 9.75,
        lgPrice: 10.75
      },
      {
        name: 'Supreme',
        smPrice: 8.75,
        mdPrice: 9.75,
        lgPrice: 10.75
      },
      {
        name: 'Super Supreme',
        smPrice: 8.75,
        mdPrice: 9.75,
        lgPrice: 10.75
      },
      {
        name: 'Meat Lovers',
        smPrice: 8.75,
        mdPrice: 9.75,
        lgPrice: 10.75
      },
      {
        name: 'Stuffed',
        smPrice: 8.75,
        mdPrice: 9.75,
        lgPrice: 10.75
      },
      {
        name: 'Veggie',
        smPrice: 8.75,
        mdPrice: 9.75,
        lgPrice: 10.75
      },
      {
        name: 'Ranch Mushroom & Spinach',
        smPrice: 8.75,
        mdPrice: 9.75,
        lgPrice: 10.75
      },
      {
        name: 'White Fresh Garlic Broccoli Tomato',
        smPrice: 8.75,
        mdPrice: 9.75,
        lgPrice: 10.75
      },

    ];

  $scope.salads = [
    {
      name: 'Bambinos Salad' ,
      description: 'Lettuce, tomato, onion & avacado.' ,
      price: 6.00
    },
    {
      name: 'Grilled Chicken Salad' ,
      description: '',
      price: 7.50
    },
    {
      name: 'Fried Chicken Salad',
      description: '',
      price: 7.50
    },
    {
      name: 'Small Salad-to-Go',
      description: '',
      price: 4.00
    },
    {
      name: 'Pasta Salad',
      description: '',
      price: 5.75
    },
    {
      name: 'Chef Salad',
      description: '',
      price: 7.50
    },
    {
      name: 'Tuna Salad',
      description: '',
      price: 7.50
    }

  ];

  $scope.hotsubs = [
    {
      name: 'Meatball Parmesan',
      smPrice: 6.00,
      lgPrice: 9.00
    },
    {
      name: 'Sausage Parmesan',
      smPrice: 6.00,
      lgPrice: 9.00
    },
    {
      name: 'Chicken Parmesan',
      smPrice: 6.00,
      lgPrice: 9.00
    },
    {
      name: 'Eggplant Parmesan',
      smPrice: 6.00,
      lgPrice: 9.00
    },
    {
      name: 'Veggie',
      smPrice: 6.00,
      lgPrice: 9.00
    },
  ];

  $scope.hotorcoldsubs = [
    {
      name: 'Italian',
      smPrice: 6.00,
      lgPrice: 8.00
    },
    {
      name: 'Ham and Cheese',
      smPrice: 6.00,
      lgPrice: 8.00
    },
    {
      name: 'Turkey and Cheese',
      smPrice: 6.00,
      lgPrice: 8.00
    },
    {
      name: 'Bambinos',
      smPrice: 7.25,
      lgPrice: 9.75
    },
    {
      name: 'Tuna',
      smPrice: 6.00,
      lgPrice: 8.00
    }
  ];

  $scope.sandwiches = [

    {
      name: 'Turkey and Cheese',
      price: 4.99
    },
    {
      name: 'Ham and Cheese',
      price: 4.99
    },
    {
      name: 'Tuna',
      price: 5.25
    }
  ];

  $scope.burgers = [
    {
      name: 'Hamburger',
      price: 4.99
    },
    {
      name: 'Cheeseburger',
      price: 5.99
    },
    {
      name: 'Chicken Filet',
      price: 5.50
    },
    {
      name: 'Grilled Chicken',
      price: 5.50
    }

  ];

  $scope.soups = [
    {
      name: 'Chicken Noodle',
      price: 4.25
    },
    {
      name: 'Minestrone',
      price: 4.50
    }
  ];

  $scope.cheesesteaks = [
    {
      name: 'Plain',
      smPrice: 5.25,
      lgPrice: 7.50
    },
    {
      name: 'Super Steaks',
      smPrice: 7.00,
      lgPrice: 9.75
    },
    {
      name: 'Bambino\'s Super',
      smPrice: 7.75,
      lgPrice: 9.50
    },
    {
      name: 'Chicken Steak',
      smPrice: 5.25,
      lgPrice: 7.50
    },
    {
      name: 'Additional Toppings',
      smPrice: 0.25,
      lgPrice: 0.35
    }
  ];

  $scope.stromboli = [
    {
      name: 'Stromboli',
      smPrice: 8.25,
      lgPrice: 13.00
    },
    {
      name: 'Veggie',
      smPrice: 9.25,
      lgPrice: 14.25
    },
    {
      name: 'Cheese Steak',
      smPrice: 9.25,
      lgPrice: 14.25
    },
    {
      name: 'Calzone',
      smPrice: 8.25,
      lgPrice: 13.00
    },
    {
      name: 'Extra Topping',
      smPrice: 0.85,
      lgPrice: 1.35
    }
  ];

  $scope.dinners = [
    {
      name: 'Lasagna',
      price: 9.25
    },
    {
      name: 'Baked Ziti',
      price: 9.25
    },
    {
      name: 'Manicotti',
      price: 9.25
    },
    {
      name: 'Cheese Ravioli',
      price: 9.50
    },
    {
      name: 'Chicken Parmesan',
      price: 9.75
    },
    {
      name: 'Cabonara',
      price: 10.50
    },
    {
      name: 'Baked Spaghetti',
      description: '',
      price: 9.00
    },
    {
      name: '',
      description: '- with meatballs',
      price: 9.75
    },
    {
      name: '',
      description: '- with sausage',
      price: 9.75
    },
    {
      name: '',
      description: '- with mushrooms',
      price: 9.75
    },
    {
      name: '',
      description: '- with everything',
      price: 10.00
    },
    {
      name: 'Fettuccine Alfredo',
      description: '',
      price: 9.50
    },
    {
      name: '',
      description: '- with chicken',
      price: 11.00
    },
    {
      name: '',
      description: '- with shrimp',
      price: 11.00
    },
    {
      name: 'Ziti Pink Sauce',
      price: 11.99
    }

  ];

  $scope.kids = [
    {
      name: 'Spaghetti',
      price: 4.75
    },
    {
      name: 'Lasagna',
      price: 4.75
    },
    {
      name: 'Chicken Fingers',
      price: 4.75
    },
    {
      name: 'Grilled Cheese',
      price: 3.25
    },
    {
      name: 'Pizza Slice w/ Fries',
      price: 3.75
    }
  ];

  $scope.drinks = [
    {
      name: 'Tea or Soft Drink',
      price: 1.50
    }
  ];

  $scope.desserts = [
    {
      name: 'Slice of Cheesecake w/ Cherries',
      price: 3.99
    },
    {
      name: 'Chocolate Truffle Cake',
      price: 4.49
    },
    {
      name: 'Donuts w/ Chocolate',
      price: 3.25
    },
    {
      name: 'Donuts w/ Chocolate & Cherries',
      price: 3.75
    },
  ];

  $scope.sides = [
    {
      name: 'Fries',
      price: 2.75
    },
    {
      name: 'Onion Rings',
      price: 2.25
    }
  ];

}]);
