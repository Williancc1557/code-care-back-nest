
import { DatabaseEnum } from 'src/enums/database.enum';
import { User } from 'src/schemas/user.entity';
import { DataSource } from 'typeorm';

export const photoProviders = [
  {
    provide: DatabaseEnum.USER_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
    inject: [DatabaseEnum.DATA_SOUCE],
  },
];
