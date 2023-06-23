import env from '@Configs/env';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

const corsOptions: CorsOptions =
  env.NODE_ENV === 'development'
    ? {
        origin: '*',
        optionsSuccessStatus: 200,
      }
    : {
        optionsSuccessStatus: 200,
      };

export default corsOptions;
