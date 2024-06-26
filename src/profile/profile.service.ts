import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Profile } from '../profile/profile.schema';

@Injectable()
export class ProfileService {
  constructor(
    @InjectModel(Profile.name) private profileModel: Model<Profile>,
  ) {}

  async getProfile(id: string): Promise<Profile> {
    return this.profileModel.findById(id).exec();
  }

  async createProfile(createProfileDto: { name: string; age?: number; bio?: string }): Promise<Profile> {
    const newProfile = new this.profileModel(createProfileDto);
    return newProfile.save();
  }

  async updateProfile(id: string, updateProfileDto: { name?: string; age?: number; bio?: string }): Promise<Profile> {
    return this.profileModel.findByIdAndUpdate(id, updateProfileDto, { new: true }).exec();
  }
}
