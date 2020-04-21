import { Entity, IsText, Description } from "helion-ui-forms";

@Entity({ artifactName: 'academicInvoiceForm' })
export class  AcademicInvoiceFormData  {

    @IsText()
    @Description("Invoice No")
    invoiceCode: string
}