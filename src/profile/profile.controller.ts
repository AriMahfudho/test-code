import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { Profile } from './profile.schema';

@Controller('profiles')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get(':id')
  async getProfile(@Param('id') id: string): Promise<Profile> {
    return this.profileService.getProfile(id);
  }

  @Post()
  async createProfile(@Body() createProfileDto: { name: string; age?: number; address?: string }): Promise<Profile> {
    return this.profileService.createProfile(createProfileDto);
  }

  @Put(':id')
  async updateProfile(@Param('id') id: string, @Body() updateProfileDto: { name?: string; age?: number; address?: string }): Promise<Profile> {
    return this.profileService.updateProfile(id, updateProfileDto);
  }
}
