import 'reflect-metadata';
import { Ignitor, prettyPrintError } from '@adonisjs/core';

const APP_ROOT = new URL('../', import.meta.url);
const IMPORTER = (filePath: string) => import(filePath);

new Ignitor(APP_ROOT, { importer: IMPORTER })
  .httpServer()
  .start()
  .catch(prettyPrintError);
