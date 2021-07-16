import { SalesforceId } from './salesforce-id';
import { SObjectOptions } from './salesforce-object-options';

export interface SObjectCreateOptions extends SObjectOptions {
    IsDeleted?: boolean | undefined;
    MasterRecordId?: SalesforceId | undefined;
    Name?: string | undefined;
    Type?: string | undefined;
    ParentId?: SalesforceId | undefined;
    BillingStreet?: string | undefined;
    BillingCity?: string | undefined;
    BillingState?: string | undefined;
    BillingPostalCode?: string | undefined;
    BillingCountry?: string | undefined;
    BillingLatitude?: number | undefined;
    BillingLongitude?: number | undefined;
    ShippingStreet?: string | undefined;
    ShippingCity?: string | undefined;
    ShippingState?: string | undefined;
    ShippingPostalCode?: string | undefined;
    ShippingCountry?: string | undefined;
    ShippingLatitude?: number | undefined;
    ShippingLongitude?: number | undefined;
    Phone?: string | undefined;
    Website?: string | undefined;
    Industry?: string | undefined;
    NumberOfEmployees?: number | undefined;
    Description?: string | undefined;
    OwnerId?: SalesforceId | undefined;
    CreatedDate?: Date | undefined;
    CreatedById?: SalesforceId | undefined;
    LastModifiedDate?: Date | undefined;
    LastModifiedById?: SalesforceId | undefined;
    SystemModstamp?: Date | undefined;
    LastActivityDate?: Date | undefined;
    LastViewedDate?: Date | undefined;
    LastReferencedDate?: Date | undefined;
    Jigsaw?: string | undefined;
    JigsawCompanyId?: string | undefined;
    AccountSource?: string | undefined;
    SicDesc?: string | undefined;
}
