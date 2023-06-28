import { Module } from '@nestjs/common';

import { NonGovernamentalOrganizationsController } from './controllers/non-governamental-organizations.controller';
import { CommonUsersController } from './controllers/common-users.controller';

@Module({
  controllers: [CommonUsersController, NonGovernamentalOrganizationsController],
  providers: [],
})
export class HttpModule {}
