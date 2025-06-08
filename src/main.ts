import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
const expressLayouts = require('express-ejs-layouts'); // Prefer using `import` over `require` in TypeScript

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Set static assets (CSS, JS, images)
  app.useStaticAssets(join(__dirname, 'public'), { prefix: '/static' });

  // Set views directory
  app.setBaseViewsDir(join(__dirname, 'views'));

  // Set EJS as the view engine
  app.setViewEngine('ejs');

  // Use express-ejs-layouts middleware
  app.use(expressLayouts);

  // Set layout file (note: full path relative to views, and include extension)
  app.set('layout', 'layouts/main'); // assumes views/layouts/main.ejs exists

  await app.listen(3000);
}
bootstrap();