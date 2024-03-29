import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddRoleFieldToUserTable1623955226486
  implements MigrationInterface
{
  name = 'AddRoleFieldToUserTable1623955226486'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "ALTER TABLE `users` ADD `role` enum ('user', 'admin') NOT NULL DEFAULT 'user'",
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE `users` DROP COLUMN `role`')
  }
}
