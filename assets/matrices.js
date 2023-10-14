const categoriasDeIngredientes = [
    {
      categoria: "Ingredientes Básicos Veganos",
      ingredientes: [
        { nombre: "Legumbres", precio: Math.floor(Math.random() * 2900) + 100, cantidad: 10 },
        { nombre: "Vegetales", precio: Math.floor(Math.random() * 2900) + 100, cantidad: 15 },
        { nombre: "Frutas", precio: Math.floor(Math.random() * 2900) + 100, cantidad: 20 },
        { nombre: "Cereales", precio: Math.floor(Math.random() * 2900) + 100, cantidad: 12 },
        { nombre: "Semillas", precio: Math.floor(Math.random() * 2900) + 100, cantidad: 8 },
        { nombre: "Frutos secos", precio: Math.floor(Math.random() * 2900) + 100, cantidad: 5 },
        { nombre: "Fécula de mandioca", precio: Math.floor(Math.random() * 2900) + 100, cantidad: 25 },
        { nombre: "Maicena", precio: Math.floor(Math.random() * 2900) + 100, cantidad: 18 },
        { nombre: "Salvado", precio: Math.floor(Math.random() * 2900) + 100, cantidad: 10 },
        { nombre: "Manteca de cacao", precio: Math.floor(Math.random() * 2900) + 100, cantidad: 30 },
        { nombre: "Manteca de Almendras", precio: Math.floor(Math.random() * 2900) + 100, cantidad: 22 },
        { nombre: "Manteca de maní", precio: Math.floor(Math.random() * 2900) + 100, cantidad: 16 },
        { nombre: "Manteca vegana", precio: Math.floor(Math.random() * 2900) + 100, cantidad: 18 },
        { nombre: "Goma xantana", precio: Math.floor(Math.random() * 2900) + 100, cantidad: 30 },
        { nombre: "Hierbas", precio: Math.floor(Math.random() * 2900) + 100, cantidad: 25 },
        { nombre: "Mayonesa vegana", precio: Math.floor(Math.random() * 2900) + 100, cantidad: 10 },
        { nombre: "Levadura de cerveza", precio: Math.floor(Math.random() * 2900) + 100, cantidad: 12 },
        {
          nombre: "Leche vegana",
          variantes: [
            { nombre: "de arroz", precio: Math.floor(Math.random() * 2900) + 100, cantidad: 8 },
            { nombre: "de almendra", precio: Math.floor(Math.random() * 2900) + 100, cantidad: 10 },
            { nombre: "de avena", precio: Math.floor(Math.random() * 2900) + 100, cantidad: 15 },
            { nombre: "de soja", precio: Math.floor(Math.random() * 2900) + 100, cantidad: 10 },
            { nombre: "de cáñamo", precio: Math.floor(Math.random() * 2900) + 100, cantidad: 5 },
            { nombre: "de coco", precio: Math.floor(Math.random() * 2900) + 100, cantidad: 20 }
          ]
        }
      ]
    },
    {
      categoria: "Ingredientes para simular el sabor de la proteína animal",
      ingredientes: [
        { nombre: "Pimentón ahumado", precio: Math.floor(Math.random() * 2900) + 100, cantidad: 10 },
        { nombre: "Alga nori", precio: Math.floor(Math.random() * 2900) + 100, cantidad: 15 },
        { nombre: "Tofu", precio: Math.floor(Math.random() * 2900) + 100, cantidad: 20 }
      ]
    },
    {
      categoria: "Repostería",
      ingredientes: [
        { nombre: "Sustitutos del huevo", precio: Math.floor(Math.random() * 2900) + 100, cantidad: 12 },
        { nombre: "Semillas de lino", precio: Math.floor(Math.random() * 2900) + 100, cantidad: 18 },
        { nombre: "Semillas de chía", precio: Math.floor(Math.random() * 2900) + 100, cantidad: 20 },
        { nombre: "Aceite de coco", precio: Math.floor(Math.random() * 2900) + 100, cantidad: 25 },
        { nombre: "Néctar de agave", precio: Math.floor(Math.random() * 2900) + 100, cantidad: 15 },
        { nombre: "Sirope de arce", precio: Math.floor(Math.random() * 2900) + 100, cantidad: 20 },
        { nombre: "Melaza residual", precio: Math.floor(Math.random() * 2900) + 100, cantidad: 25 },
        { nombre: "Masas y hojaldres", precio: Math.floor(Math.random() * 2900) + 100, cantidad: 10 }
      ]
    },
    {
      categoria: "Celiacos",
      ingredientes: [
        { nombre: "Fécula de mandioca", precio: Math.floor(Math.random() * 2900) + 100, cantidad: 15 },
        { nombre: "Harina de arroz", precio: Math.floor(Math.random() * 2900) + 100, cantidad: 20 },
        { nombre: "Trigo Sarraceno", precio: Math.floor(Math.random() * 2900) + 100, cantidad: 10 },
        { nombre: "Polvo de hornear", precio: Math.floor(Math.random() * 2900) + 100, cantidad: 15 },
        { nombre: "Goma xantica", precio: Math.floor(Math.random() * 2900) + 100, cantidad: 12 },
        { nombre: "Psyllium", precio: Math.floor(Math.random() * 2900) + 100, cantidad: 8 }
      ]
    }
    // Otras categorías pueden agregarse aquí
  ];
  