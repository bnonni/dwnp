import { Setup } from '../../../../src/lib/setup.js';
import { Logger } from '../../../../src/utils/logger.js';
import { ICommand } from '../dpm.js';

export class SetupCommand implements ICommand {
  public async execute(): Promise<void> {
    try {
      Logger.log(`Running DRPM setup!`);
      await Setup.run();
    } catch (error: any) {
      Logger.error(error.message);
      process.exit(1);
    }
  }
}
