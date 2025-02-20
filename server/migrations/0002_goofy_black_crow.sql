PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_class` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`description` text,
	`created_at` integer,
	`updated_at` integer
);
--> statement-breakpoint
INSERT INTO `__new_class`("id", "name", "description", "created_at", "updated_at") SELECT "id", "name", "description", "created_at", "updated_at" FROM `class`;--> statement-breakpoint
DROP TABLE `class`;--> statement-breakpoint
ALTER TABLE `__new_class` RENAME TO `class`;--> statement-breakpoint
PRAGMA foreign_keys=ON;--> statement-breakpoint
CREATE TABLE `__new_event` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`date` integer,
	`class_id` integer,
	`created_at` integer,
	`updated_at` integer,
	FOREIGN KEY (`class_id`) REFERENCES `class`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
INSERT INTO `__new_event`("id", "name", "date", "class_id", "created_at", "updated_at") SELECT "id", "name", "date", "class_id", "created_at", "updated_at" FROM `event`;--> statement-breakpoint
DROP TABLE `event`;--> statement-breakpoint
ALTER TABLE `__new_event` RENAME TO `event`;