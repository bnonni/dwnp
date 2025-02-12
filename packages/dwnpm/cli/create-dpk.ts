#!/usr/bin/env node

import { Package } from '../../../src/lib/package.js';
import { Logger } from '../../../src/utils/logger.js';

try {
  await Package.init();
} catch (error: any) {
  Logger.error(error.message);
  process.exit(1);
}