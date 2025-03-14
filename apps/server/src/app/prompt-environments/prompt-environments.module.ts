import { Module } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { PromptEnvironmentsResolver } from "./prompt-environments.resolver";
import { PromptEnvironmentsService } from "./prompt-environments.service";
import { EnvironmentsModule } from "../environments/environments.module";
import { IdentityModule } from "../identity/identity.module";

@Module({
  imports: [IdentityModule, EnvironmentsModule],
  providers: [
    PrismaService,
    PromptEnvironmentsResolver,
    PromptEnvironmentsService,
  ],
})
export class PromptEnvironmentsModule {}
