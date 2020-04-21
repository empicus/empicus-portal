import { Entity, IsText, Description } from "helion-ui-forms";

@Entity({ artifactName: 'contentInvoiceForm' })
export class  ContentInvoiceFormData  {

    @IsText()
    @Description("Invoice No")
    invoiceCode: string
}