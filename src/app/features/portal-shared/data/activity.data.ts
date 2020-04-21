import { ArtifactData } from 'helion-core';
import BigNumber from 'bignumber.js';

export class ActivityData {
    type: string;
    activityValue: BigNumber;
    reference: string;
    duration: string;
    status: string;
    text: ArtifactData;
    createdDate: number;
}