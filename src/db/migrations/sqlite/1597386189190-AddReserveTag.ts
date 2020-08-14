import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddReserveTag1597386189190 implements MigrationInterface {
    public name = 'AddReserveTag1597386189190';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            'CREATE TABLE "temporary_reserve" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "updateTime" bigint NOT NULL, "ruleId" integer, "ruleUpdateCnt" integer, "isSkip" boolean NOT NULL DEFAULT (0), "isConflict" boolean NOT NULL DEFAULT (0), "allowEndLack" boolean NOT NULL DEFAULT (0), "isOverlap" boolean NOT NULL DEFAULT (0), "isIgnoreOverlap" boolean NOT NULL DEFAULT (0), "isTimeSpecified" boolean NOT NULL DEFAULT (0), "parentDirectoryName" text, "directory" text, "recordedFormat" text, "encodeMode1" text, "encodeParentDirectoryName1" text, "encodeDirectory1" text, "encodeMode2" text, "encodeParentDirectoryName2" text, "encodeDirectory2" text, "encodeMode3" text, "encodeParentDirectoryName3" text, "encodeDirectory3" text, "isDeleteOriginalAfterEncode" boolean NOT NULL DEFAULT (0), "programId" bigint, "programUpdateTime" bigint, "channelId" bigint NOT NULL, "channel" text NOT NULL, "channelType" text NOT NULL, "startAt" bigint NOT NULL, "endAt" bigint NOT NULL, "name" text, "halfWidthName" text, "shortName" text, "description" text, "halfWidthDescription" text, "extended" text, "halfWidthExtended" text, "genre1" integer, "subGenre1" integer, "genre2" integer, "subGenre2" integer, "genre3" integer, "subGenre3" integer, "videoType" text, "videoResolution" text, "videoStreamContent" integer, "videoComponentType" integer, "audioSamplingRate" integer, "audioComponentType" integer, "tags" text)',
        );
        await queryRunner.query(
            'INSERT INTO "temporary_reserve"("id", "updateTime", "ruleId", "ruleUpdateCnt", "isSkip", "isConflict", "allowEndLack", "isOverlap", "isIgnoreOverlap", "isTimeSpecified", "parentDirectoryName", "directory", "recordedFormat", "encodeMode1", "encodeParentDirectoryName1", "encodeDirectory1", "encodeMode2", "encodeParentDirectoryName2", "encodeDirectory2", "encodeMode3", "encodeParentDirectoryName3", "encodeDirectory3", "isDeleteOriginalAfterEncode", "programId", "programUpdateTime", "channelId", "channel", "channelType", "startAt", "endAt", "name", "halfWidthName", "shortName", "description", "halfWidthDescription", "extended", "halfWidthExtended", "genre1", "subGenre1", "genre2", "subGenre2", "genre3", "subGenre3", "videoType", "videoResolution", "videoStreamContent", "videoComponentType", "audioSamplingRate", "audioComponentType") SELECT "id", "updateTime", "ruleId", "ruleUpdateCnt", "isSkip", "isConflict", "allowEndLack", "isOverlap", "isIgnoreOverlap", "isTimeSpecified", "parentDirectoryName", "directory", "recordedFormat", "encodeMode1", "encodeParentDirectoryName1", "encodeDirectory1", "encodeMode2", "encodeParentDirectoryName2", "encodeDirectory2", "encodeMode3", "encodeParentDirectoryName3", "encodeDirectory3", "isDeleteOriginalAfterEncode", "programId", "programUpdateTime", "channelId", "channel", "channelType", "startAt", "endAt", "name", "halfWidthName", "shortName", "description", "halfWidthDescription", "extended", "halfWidthExtended", "genre1", "subGenre1", "genre2", "subGenre2", "genre3", "subGenre3", "videoType", "videoResolution", "videoStreamContent", "videoComponentType", "audioSamplingRate", "audioComponentType" FROM "reserve"',
        );
        await queryRunner.query('DROP TABLE "reserve"');
        await queryRunner.query('ALTER TABLE "temporary_reserve" RENAME TO "reserve"');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE "reserve" RENAME TO "temporary_reserve"');
        await queryRunner.query(
            'CREATE TABLE "reserve" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "updateTime" bigint NOT NULL, "ruleId" integer, "ruleUpdateCnt" integer, "isSkip" boolean NOT NULL DEFAULT (0), "isConflict" boolean NOT NULL DEFAULT (0), "allowEndLack" boolean NOT NULL DEFAULT (0), "isOverlap" boolean NOT NULL DEFAULT (0), "isIgnoreOverlap" boolean NOT NULL DEFAULT (0), "isTimeSpecified" boolean NOT NULL DEFAULT (0), "parentDirectoryName" text, "directory" text, "recordedFormat" text, "encodeMode1" text, "encodeParentDirectoryName1" text, "encodeDirectory1" text, "encodeMode2" text, "encodeParentDirectoryName2" text, "encodeDirectory2" text, "encodeMode3" text, "encodeParentDirectoryName3" text, "encodeDirectory3" text, "isDeleteOriginalAfterEncode" boolean NOT NULL DEFAULT (0), "programId" bigint, "programUpdateTime" bigint, "channelId" bigint NOT NULL, "channel" text NOT NULL, "channelType" text NOT NULL, "startAt" bigint NOT NULL, "endAt" bigint NOT NULL, "name" text, "halfWidthName" text, "shortName" text, "description" text, "halfWidthDescription" text, "extended" text, "halfWidthExtended" text, "genre1" integer, "subGenre1" integer, "genre2" integer, "subGenre2" integer, "genre3" integer, "subGenre3" integer, "videoType" text, "videoResolution" text, "videoStreamContent" integer, "videoComponentType" integer, "audioSamplingRate" integer, "audioComponentType" integer)',
        );
        await queryRunner.query(
            'INSERT INTO "reserve"("id", "updateTime", "ruleId", "ruleUpdateCnt", "isSkip", "isConflict", "allowEndLack", "isOverlap", "isIgnoreOverlap", "isTimeSpecified", "parentDirectoryName", "directory", "recordedFormat", "encodeMode1", "encodeParentDirectoryName1", "encodeDirectory1", "encodeMode2", "encodeParentDirectoryName2", "encodeDirectory2", "encodeMode3", "encodeParentDirectoryName3", "encodeDirectory3", "isDeleteOriginalAfterEncode", "programId", "programUpdateTime", "channelId", "channel", "channelType", "startAt", "endAt", "name", "halfWidthName", "shortName", "description", "halfWidthDescription", "extended", "halfWidthExtended", "genre1", "subGenre1", "genre2", "subGenre2", "genre3", "subGenre3", "videoType", "videoResolution", "videoStreamContent", "videoComponentType", "audioSamplingRate", "audioComponentType") SELECT "id", "updateTime", "ruleId", "ruleUpdateCnt", "isSkip", "isConflict", "allowEndLack", "isOverlap", "isIgnoreOverlap", "isTimeSpecified", "parentDirectoryName", "directory", "recordedFormat", "encodeMode1", "encodeParentDirectoryName1", "encodeDirectory1", "encodeMode2", "encodeParentDirectoryName2", "encodeDirectory2", "encodeMode3", "encodeParentDirectoryName3", "encodeDirectory3", "isDeleteOriginalAfterEncode", "programId", "programUpdateTime", "channelId", "channel", "channelType", "startAt", "endAt", "name", "halfWidthName", "shortName", "description", "halfWidthDescription", "extended", "halfWidthExtended", "genre1", "subGenre1", "genre2", "subGenre2", "genre3", "subGenre3", "videoType", "videoResolution", "videoStreamContent", "videoComponentType", "audioSamplingRate", "audioComponentType" FROM "temporary_reserve"',
        );
        await queryRunner.query('DROP TABLE "temporary_reserve"');
    }
}
