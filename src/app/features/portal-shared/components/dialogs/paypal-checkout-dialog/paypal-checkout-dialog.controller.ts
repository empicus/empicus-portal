
import { ArtifactData } from 'helion-core';
import { DialogContainerController } from "helion-ui-components";
import { PaymentData } from "../../../data/payment.data";
@DialogContainerController({ 
	model: PaymentData,
})
export class  PaypalCheckoutDialogController {
	initData: ArtifactData;
}