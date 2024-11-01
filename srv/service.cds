using { akhilasiripurapu_1_d02 as my } from '../db/schema.cds';

@path: '/service/akhilasiripurapu_1_d02'
@requires: 'authenticated-user'
service akhilasiripurapu_1_d02Srv {
  @odata.draft.enabled
  entity CustomerMessages as projection on my.CustomerMessages;
}