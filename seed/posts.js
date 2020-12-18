const db = require('../db/connection')
const Post = require('../models/modPost')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const posts = 
    [
      {
        "title": 'Post 001',
        "author": 'Leopold Scuffnulginslifp',
        "content": "Non diam phasellus vestibulum lorem. Eget nunc scelerisque viverra mauris in aliquam sem fringilla ut. Est placerat in egestas erat imperdiet sed. Turpis in eu mi bibendum neque egestas congue. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Sit amet consectetur adipiscing elit ut aliquam. Augue neque gravida in fermentum et sollicitudin ac orci. Quis hendrerit dolor magna eget est lorem ipsum dolor. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Et malesuada fames ac turpis egestas sed tempus urna.",
        "imgURL": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/dcfc0d27-855f-49ce-88bb-df09669f6cac/d4nqpzu-5799cb5a-9b4e-4c9c-8f42-5db12d9106e6.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZGNmYzBkMjctODU1Zi00OWNlLTg4YmItZGYwOTY2OWY2Y2FjXC9kNG5xcHp1LTU3OTljYjVhLTliNGUtNGM5Yy04ZjQyLTVkYjEyZDkxMDZlNi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.R1N4SYq41dgnZqVvPcj4VAb9Tf9JRjGqzNmyHiBKU6s",
      },
      {
        "title": 'Post 002',
        "author": 'Leopold Scuffnulginslifp',
        "content": "Non diam phasellus vestibulum lorem. Eget nunc scelerisque viverra mauris in aliquam sem fringilla ut. Est placerat in egestas erat imperdiet sed. Turpis in eu mi bibendum neque egestas congue. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Sit amet consectetur adipiscing elit ut aliquam. Augue neque gravida in fermentum et sollicitudin ac orci. Quis hendrerit dolor magna eget est lorem ipsum dolor. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Et malesuada fames ac turpis egestas sed tempus urna.",
        "imgURL": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/dcfc0d27-855f-49ce-88bb-df09669f6cac/d4nqpzu-5799cb5a-9b4e-4c9c-8f42-5db12d9106e6.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZGNmYzBkMjctODU1Zi00OWNlLTg4YmItZGYwOTY2OWY2Y2FjXC9kNG5xcHp1LTU3OTljYjVhLTliNGUtNGM5Yy04ZjQyLTVkYjEyZDkxMDZlNi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.R1N4SYq41dgnZqVvPcj4VAb9Tf9JRjGqzNmyHiBKU6s",
      },
      {
        "title": 'Post 003',
        "author": 'Leopold Scuffnulginslifp',
        "content": "Non diam phasellus vestibulum lorem. Eget nunc scelerisque viverra mauris in aliquam sem fringilla ut. Est placerat in egestas erat imperdiet sed. Turpis in eu mi bibendum neque egestas congue. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Sit amet consectetur adipiscing elit ut aliquam. Augue neque gravida in fermentum et sollicitudin ac orci. Quis hendrerit dolor magna eget est lorem ipsum dolor. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Et malesuada fames ac turpis egestas sed tempus urna.",
        "imgURL": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/dcfc0d27-855f-49ce-88bb-df09669f6cac/d4nqpzu-5799cb5a-9b4e-4c9c-8f42-5db12d9106e6.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZGNmYzBkMjctODU1Zi00OWNlLTg4YmItZGYwOTY2OWY2Y2FjXC9kNG5xcHp1LTU3OTljYjVhLTliNGUtNGM5Yy04ZjQyLTVkYjEyZDkxMDZlNi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.R1N4SYq41dgnZqVvPcj4VAb9Tf9JRjGqzNmyHiBKU6s",
      },
      {
        "title": 'Post 004',
        "author": 'Leopold Scuffnulginslifp',
        "content": "Non diam phasellus vestibulum lorem. Eget nunc scelerisque viverra mauris in aliquam sem fringilla ut. Est placerat in egestas erat imperdiet sed. Turpis in eu mi bibendum neque egestas congue. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Sit amet consectetur adipiscing elit ut aliquam. Augue neque gravida in fermentum et sollicitudin ac orci. Quis hendrerit dolor magna eget est lorem ipsum dolor. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Et malesuada fames ac turpis egestas sed tempus urna.",
        "imgURL": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/dcfc0d27-855f-49ce-88bb-df09669f6cac/d4nqpzu-5799cb5a-9b4e-4c9c-8f42-5db12d9106e6.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZGNmYzBkMjctODU1Zi00OWNlLTg4YmItZGYwOTY2OWY2Y2FjXC9kNG5xcHp1LTU3OTljYjVhLTliNGUtNGM5Yy04ZjQyLTVkYjEyZDkxMDZlNi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.R1N4SYq41dgnZqVvPcj4VAb9Tf9JRjGqzNmyHiBKU6s",
      },
      {
        "title": 'Post 005',
        "author": 'Leopold Scuffnulginslifp',
        "content": "Non diam phasellus vestibulum lorem. Eget nunc scelerisque viverra mauris in aliquam sem fringilla ut. Est placerat in egestas erat imperdiet sed. Turpis in eu mi bibendum neque egestas congue. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Sit amet consectetur adipiscing elit ut aliquam. Augue neque gravida in fermentum et sollicitudin ac orci. Quis hendrerit dolor magna eget est lorem ipsum dolor. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Et malesuada fames ac turpis egestas sed tempus urna.",
        "imgURL": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/dcfc0d27-855f-49ce-88bb-df09669f6cac/d4nqpzu-5799cb5a-9b4e-4c9c-8f42-5db12d9106e6.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZGNmYzBkMjctODU1Zi00OWNlLTg4YmItZGYwOTY2OWY2Y2FjXC9kNG5xcHp1LTU3OTljYjVhLTliNGUtNGM5Yy04ZjQyLTVkYjEyZDkxMDZlNi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.R1N4SYq41dgnZqVvPcj4VAb9Tf9JRjGqzNmyHiBKU6s",
      },
      {
        "title": 'Post 006',
        "author": 'Leopold Scuffnulginslifp',
        "content": "Non diam phasellus vestibulum lorem. Eget nunc scelerisque viverra mauris in aliquam sem fringilla ut. Est placerat in egestas erat imperdiet sed. Turpis in eu mi bibendum neque egestas congue. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Sit amet consectetur adipiscing elit ut aliquam. Augue neque gravida in fermentum et sollicitudin ac orci. Quis hendrerit dolor magna eget est lorem ipsum dolor. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Et malesuada fames ac turpis egestas sed tempus urna.",
        "imgURL": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/dcfc0d27-855f-49ce-88bb-df09669f6cac/d4nqpzu-5799cb5a-9b4e-4c9c-8f42-5db12d9106e6.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZGNmYzBkMjctODU1Zi00OWNlLTg4YmItZGYwOTY2OWY2Y2FjXC9kNG5xcHp1LTU3OTljYjVhLTliNGUtNGM5Yy04ZjQyLTVkYjEyZDkxMDZlNi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.R1N4SYq41dgnZqVvPcj4VAb9Tf9JRjGqzNmyHiBKU6s",
      },
      {
        "title": 'Post 007',
        "author": 'Leopold Scuffnulginslifp',
        "content": "Non diam phasellus vestibulum lorem. Eget nunc scelerisque viverra mauris in aliquam sem fringilla ut. Est placerat in egestas erat imperdiet sed. Turpis in eu mi bibendum neque egestas congue. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Sit amet consectetur adipiscing elit ut aliquam. Augue neque gravida in fermentum et sollicitudin ac orci. Quis hendrerit dolor magna eget est lorem ipsum dolor. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Et malesuada fames ac turpis egestas sed tempus urna.",
        "imgURL": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/dcfc0d27-855f-49ce-88bb-df09669f6cac/d4nqpzu-5799cb5a-9b4e-4c9c-8f42-5db12d9106e6.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZGNmYzBkMjctODU1Zi00OWNlLTg4YmItZGYwOTY2OWY2Y2FjXC9kNG5xcHp1LTU3OTljYjVhLTliNGUtNGM5Yy04ZjQyLTVkYjEyZDkxMDZlNi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.R1N4SYq41dgnZqVvPcj4VAb9Tf9JRjGqzNmyHiBKU6s",
      },
      {
        "title": 'Post 008',
        "author": 'Leopold Scuffnulginslifp',
        "content": "Non diam phasellus vestibulum lorem. Eget nunc scelerisque viverra mauris in aliquam sem fringilla ut. Est placerat in egestas erat imperdiet sed. Turpis in eu mi bibendum neque egestas congue. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Sit amet consectetur adipiscing elit ut aliquam. Augue neque gravida in fermentum et sollicitudin ac orci. Quis hendrerit dolor magna eget est lorem ipsum dolor. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Et malesuada fames ac turpis egestas sed tempus urna.",
        "imgURL": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/dcfc0d27-855f-49ce-88bb-df09669f6cac/d4nqpzu-5799cb5a-9b4e-4c9c-8f42-5db12d9106e6.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZGNmYzBkMjctODU1Zi00OWNlLTg4YmItZGYwOTY2OWY2Y2FjXC9kNG5xcHp1LTU3OTljYjVhLTliNGUtNGM5Yy04ZjQyLTVkYjEyZDkxMDZlNi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.R1N4SYq41dgnZqVvPcj4VAb9Tf9JRjGqzNmyHiBKU6s",
      },
      {
        "title": 'Post 009',
        "author": 'Leopold Scuffnulginslifp',
        "content": "Non diam phasellus vestibulum lorem. Eget nunc scelerisque viverra mauris in aliquam sem fringilla ut. Est placerat in egestas erat imperdiet sed. Turpis in eu mi bibendum neque egestas congue. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Sit amet consectetur adipiscing elit ut aliquam. Augue neque gravida in fermentum et sollicitudin ac orci. Quis hendrerit dolor magna eget est lorem ipsum dolor. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Et malesuada fames ac turpis egestas sed tempus urna.",
        "imgURL": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/dcfc0d27-855f-49ce-88bb-df09669f6cac/d4nqpzu-5799cb5a-9b4e-4c9c-8f42-5db12d9106e6.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZGNmYzBkMjctODU1Zi00OWNlLTg4YmItZGYwOTY2OWY2Y2FjXC9kNG5xcHp1LTU3OTljYjVhLTliNGUtNGM5Yy04ZjQyLTVkYjEyZDkxMDZlNi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.R1N4SYq41dgnZqVvPcj4VAb9Tf9JRjGqzNmyHiBKU6s",
      },
      {
        "title": 'Post 010',
        "author": 'Leopold Scuffnulginslifp',
        "content": "Non diam phasellus vestibulum lorem. Eget nunc scelerisque viverra mauris in aliquam sem fringilla ut. Est placerat in egestas erat imperdiet sed. Turpis in eu mi bibendum neque egestas congue. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Sit amet consectetur adipiscing elit ut aliquam. Augue neque gravida in fermentum et sollicitudin ac orci. Quis hendrerit dolor magna eget est lorem ipsum dolor. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Et malesuada fames ac turpis egestas sed tempus urna.",
        "imgURL": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/dcfc0d27-855f-49ce-88bb-df09669f6cac/d4nqpzu-5799cb5a-9b4e-4c9c-8f42-5db12d9106e6.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZGNmYzBkMjctODU1Zi00OWNlLTg4YmItZGYwOTY2OWY2Y2FjXC9kNG5xcHp1LTU3OTljYjVhLTliNGUtNGM5Yy04ZjQyLTVkYjEyZDkxMDZlNi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.R1N4SYq41dgnZqVvPcj4VAb9Tf9JRjGqzNmyHiBKU6s",
      },
      {
        "title": 'Post 011',
        "author": 'Leopold Scuffnulginslifp',
        "content": "Non diam phasellus vestibulum lorem. Eget nunc scelerisque viverra mauris in aliquam sem fringilla ut. Est placerat in egestas erat imperdiet sed. Turpis in eu mi bibendum neque egestas congue. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Sit amet consectetur adipiscing elit ut aliquam. Augue neque gravida in fermentum et sollicitudin ac orci. Quis hendrerit dolor magna eget est lorem ipsum dolor. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Et malesuada fames ac turpis egestas sed tempus urna.",
        "imgURL": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/dcfc0d27-855f-49ce-88bb-df09669f6cac/d4nqpzu-5799cb5a-9b4e-4c9c-8f42-5db12d9106e6.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZGNmYzBkMjctODU1Zi00OWNlLTg4YmItZGYwOTY2OWY2Y2FjXC9kNG5xcHp1LTU3OTljYjVhLTliNGUtNGM5Yy04ZjQyLTVkYjEyZDkxMDZlNi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.R1N4SYq41dgnZqVvPcj4VAb9Tf9JRjGqzNmyHiBKU6s",
      },
      {
        "title": 'Post 012',
        "author": 'Leopold Scuffnulginslifp',
        "content": "Non diam phasellus vestibulum lorem. Eget nunc scelerisque viverra mauris in aliquam sem fringilla ut. Est placerat in egestas erat imperdiet sed. Turpis in eu mi bibendum neque egestas congue. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Sit amet consectetur adipiscing elit ut aliquam. Augue neque gravida in fermentum et sollicitudin ac orci. Quis hendrerit dolor magna eget est lorem ipsum dolor. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Et malesuada fames ac turpis egestas sed tempus urna.",
        "imgURL": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/dcfc0d27-855f-49ce-88bb-df09669f6cac/d4nqpzu-5799cb5a-9b4e-4c9c-8f42-5db12d9106e6.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZGNmYzBkMjctODU1Zi00OWNlLTg4YmItZGYwOTY2OWY2Y2FjXC9kNG5xcHp1LTU3OTljYjVhLTliNGUtNGM5Yy04ZjQyLTVkYjEyZDkxMDZlNi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.R1N4SYq41dgnZqVvPcj4VAb9Tf9JRjGqzNmyHiBKU6s",
      },
      {
        "title": 'Post 013',
        "author": 'Leopold Scuffnulginslifp',
        "content": "Non diam phasellus vestibulum lorem. Eget nunc scelerisque viverra mauris in aliquam sem fringilla ut. Est placerat in egestas erat imperdiet sed. Turpis in eu mi bibendum neque egestas congue. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Sit amet consectetur adipiscing elit ut aliquam. Augue neque gravida in fermentum et sollicitudin ac orci. Quis hendrerit dolor magna eget est lorem ipsum dolor. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Et malesuada fames ac turpis egestas sed tempus urna.",
        "imgURL": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/dcfc0d27-855f-49ce-88bb-df09669f6cac/d4nqpzu-5799cb5a-9b4e-4c9c-8f42-5db12d9106e6.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZGNmYzBkMjctODU1Zi00OWNlLTg4YmItZGYwOTY2OWY2Y2FjXC9kNG5xcHp1LTU3OTljYjVhLTliNGUtNGM5Yy04ZjQyLTVkYjEyZDkxMDZlNi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.R1N4SYq41dgnZqVvPcj4VAb9Tf9JRjGqzNmyHiBKU6s",
      },
      {
        "title": 'Post 014',
        "author": 'Leopold Scuffnulginslifp',
        "content": "Non diam phasellus vestibulum lorem. Eget nunc scelerisque viverra mauris in aliquam sem fringilla ut. Est placerat in egestas erat imperdiet sed. Turpis in eu mi bibendum neque egestas congue. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Sit amet consectetur adipiscing elit ut aliquam. Augue neque gravida in fermentum et sollicitudin ac orci. Quis hendrerit dolor magna eget est lorem ipsum dolor. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Et malesuada fames ac turpis egestas sed tempus urna.",
        "imgURL": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/dcfc0d27-855f-49ce-88bb-df09669f6cac/d4nqpzu-5799cb5a-9b4e-4c9c-8f42-5db12d9106e6.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZGNmYzBkMjctODU1Zi00OWNlLTg4YmItZGYwOTY2OWY2Y2FjXC9kNG5xcHp1LTU3OTljYjVhLTliNGUtNGM5Yy04ZjQyLTVkYjEyZDkxMDZlNi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.R1N4SYq41dgnZqVvPcj4VAb9Tf9JRjGqzNmyHiBKU6s",
      },
      {
        "title": 'Post 015',
        "author": 'Leopold Scuffnulginslifp',
        "content": "Non diam phasellus vestibulum lorem. Eget nunc scelerisque viverra mauris in aliquam sem fringilla ut. Est placerat in egestas erat imperdiet sed. Turpis in eu mi bibendum neque egestas congue. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Sit amet consectetur adipiscing elit ut aliquam. Augue neque gravida in fermentum et sollicitudin ac orci. Quis hendrerit dolor magna eget est lorem ipsum dolor. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Et malesuada fames ac turpis egestas sed tempus urna.",
        "imgURL": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/dcfc0d27-855f-49ce-88bb-df09669f6cac/d4nqpzu-5799cb5a-9b4e-4c9c-8f42-5db12d9106e6.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZGNmYzBkMjctODU1Zi00OWNlLTg4YmItZGYwOTY2OWY2Y2FjXC9kNG5xcHp1LTU3OTljYjVhLTliNGUtNGM5Yy04ZjQyLTVkYjEyZDkxMDZlNi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.R1N4SYq41dgnZqVvPcj4VAb9Tf9JRjGqzNmyHiBKU6s",
      }
    ]
  await Post.insertMany(posts)
  console.log("Created Blog Posts!")
}
//run posting function and close database when finished
const run = async () => {
  await main()
  db.close()
}

run()