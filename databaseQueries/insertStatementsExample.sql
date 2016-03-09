use ContentManagement;

START TRANSACTION;

INSERT INTO `Module` (moduleName, moduleDescription, moduleType, columnRequired, baseUrl) VALUES ('Travel Guard Insurance Extended Plans','Travel guard insurance module with extended plans',1, 'RIGHT', '/checkout.v2/travelGuardInsuranceExtendedPlans.jsp');

INSERT INTO `ModuleDataElement` (moduleId, name, moduleDataElementType, value1Name) select m.id, 'insuranceHeadr', 2, 'text'  from Module m where moduleName = 'Travel Guard Insurance Extended Plans';
INSERT INTO `ModuleDataElement` (moduleId, name, moduleDataElementType, value1Name) select m.id, 'InsuranceCoverageDetails', 1, 'html'  from Module m where moduleName = 'Travel Guard Insurance Extended Plans';
INSERT INTO `ModuleDataElement` (moduleId, name, moduleDataElementType, value1Name) select m.id, 'Insurance Agreement Text', 1, 'html'  from Module m where moduleName = 'Travel Guard Insurance Extended Plans';
INSERT INTO `ModuleDataElement` (moduleId, name, moduleDataElementType, value1Name) select m.id, 'travelInsCostTxt', 2, 'text'  from Module m where moduleName = 'Travel Guard Insurance Extended Plans';
INSERT INTO `ModuleDataElement` (moduleId, name, moduleDataElementType, value1Name) select m.id, 'ageLimit', 2, 'text'  from Module m where moduleName = 'Travel Guard Insurance Extended Plans';
INSERT INTO `ModuleDataElement` (moduleId, name, moduleDataElementType, value1Name) select m.id, 'areYouPreparedTxt', 2, 'text'  from Module m where moduleName = 'Travel Guard Insurance Extended Plans';
INSERT INTO `ModuleDataElement` (moduleId, name, moduleDataElementType, value1Name) select m.id, 'basicpluscoverageText', 2, 'text'  from Module m where moduleName = 'Travel Guard Insurance Extended Plans';
INSERT INTO `ModuleDataElement` (moduleId, name, moduleDataElementType, value1Name) select m.id, 'totalPriceTxt', 2, 'text'  from Module m where moduleName = 'Travel Guard Insurance Extended Plans';
INSERT INTO `ModuleDataElement` (moduleId, name, moduleDataElementType, value1Name) select m.id, 'travelInsurancePLanText', 2, 'text'  from Module m where moduleName = 'Travel Guard Insurance Extended Plans';
INSERT INTO `ModuleDataElement` (moduleId, name, moduleDataElementType, value1Name) select m.id, 'certificateInsuranceTxt', 2, 'text'  from Module m where moduleName = 'Travel Guard Insurance Extended Plans';
INSERT INTO `ModuleDataElement` (moduleId, name, moduleDataElementType, value1Name) select m.id, 'basicTxt', 2, 'text'  from Module m where moduleName = 'Travel Guard Insurance Extended Plans';
INSERT INTO `ModuleDataElement` (moduleId, name, moduleDataElementType, value1Name) select m.id, 'button text', 2, 'text'  from Module m where moduleName = 'Travel Guard Insurance Extended Plans';
INSERT INTO `ModuleDataElement` (moduleId, name, moduleDataElementType, value1Name) select m.id, 'button text added', 2, 'text'  from Module m where moduleName = 'Travel Guard Insurance Extended Plans';
INSERT INTO `ModuleDataElement` (moduleId, name, moduleDataElementType, value1Name) select m.id, 'optionalCoverageUnavailable', 2, 'text'  from Module m where moduleName = 'Travel Guard Insurance Extended Plans';
INSERT INTO `ModuleDataElement` (moduleId, name, moduleDataElementType, value1Name, value2Name) select m.id, 'travelGuardLogo', 2, 'logo', 'logo'  from Module m where moduleName = 'Travel Guard Insurance Extended Plans';
INSERT INTO `ModuleDataElement` (moduleId, name, moduleDataElementType, value1Name) select m.id, 'insuranceAcknowledgement', 2, 'text'  from Module m where moduleName = 'Travel Guard Insurance Extended Plans';

INSERT INTO `PageModuleImplementation` (pageImpId, moduleId, pageOrder, active) select pi.id, m.id, 6, 'Y' from PageImplementation pi, Module m where pi.pageId = (select id from Page where pageName = 'Checkout Page - V2') and pi.siteId = 1 and m.moduleName = 'Travel Guard Insurance Extended Plans';

INSERT INTO `ModuleDataValue` (moduleDataElementId , siteId, languageId, value1) select mde.id, 1, 1, 'Travel Guard Strongly Recommends Travel Insurance' from ModuleDataElement mde where mde.moduleId = (select id from Module where moduleName = 'Travel Guard Insurance Extended Plans') and mde.name = 'insuranceHeadr';
INSERT INTO `ModuleDataValue` (moduleDataElementId , siteId, languageId, value1, value2, value3) 
select mde.id, 1, 1, '<div>Coverage is offered by Travel Guard Group, Inc. and limitations will apply; <a class="detailsTxt"  href="http://www.travelguard.com/disclaimer/" target="_blank">click here.</a> for full disclaimer.</div>',
 '<div>Travel Guard’s travel insurance can provide financial reimbursement should the unexpected occur. To learn more about all of the benefits of purchasing a Travel Guard travel insurance plan, please, <a class="detailsTxt"  href="http://www.travelguard.com/travix/domesticlearnmore.aspx"  target="_blank">click here.</a></div>',
  '<div class="whySelectIns">
<div>Travel Guard’s travel insurance can provide financial reimbursement should the unexpected occur before you leave or while you re on your trip.</div>
</div>'
   from ModuleDataElement mde where mde.moduleId = (select id from Module where moduleName = 'Travel Guard Insurance Extended Plans') and mde.name = 'InsuranceCoverageDetails';
INSERT INTO `ModuleDataValue` (moduleDataElementId , siteId, languageId, value1, value2) select mde.id, 1, 1, 'Yes!', 'No thanks' from ModuleDataElement mde where mde.moduleId = (select id from Module where moduleName = 'Travel Guard Insurance Extended Plans') and mde.name = 'Insurance Agreement Text';
INSERT INTO `ModuleDataValue` (moduleDataElementId , siteId, languageId, value1, value2) select mde.id, 1, 1, 'XX.XX', '$ XX.XX' from ModuleDataElement mde where mde.moduleId = (select id from Module where moduleName = 'Travel Guard Insurance Extended Plans') and mde.name = 'travelInsCostTxt';
INSERT INTO `ModuleDataValue` (moduleDataElementId , siteId, languageId, value1) select mde.id, 1, 1, '100' from ModuleDataElement mde where mde.moduleId = (select id from Module where moduleName = 'Travel Guard Insurance Extended Plans') and mde.name = 'ageLimit';
INSERT INTO `ModuleDataValue` (moduleDataElementId , siteId, languageId, value1) select mde.id, 1, 1, 'Are you prepared?' from ModuleDataElement mde where mde.moduleId = (select id from Module where moduleName = 'Travel Guard Insurance Extended Plans') and mde.name = 'areYouPreparedTxt';
INSERT INTO `ModuleDataValue` (moduleDataElementId , siteId, languageId, value1) select mde.id, 1, 1, 'Basic + Coverage' from ModuleDataElement mde where mde.moduleId = (select id from Module where moduleName = 'Travel Guard Insurance Extended Plans') and mde.name = 'basicpluscoverageText';
INSERT INTO `ModuleDataValue` (moduleDataElementId , siteId, languageId, value1) select mde.id, 1, 1, 'Total Price:' from ModuleDataElement mde where mde.moduleId = (select id from Module where moduleName = 'Travel Guard Insurance Extended Plans') and mde.name = 'totalPriceTxt';
INSERT INTO `ModuleDataValue` (moduleDataElementId , siteId, languageId, value1, value2) select mde.id, 1, 1, 'Travel Insurance Plan', 'Cancel for ANY Reason Coverage' from ModuleDataElement mde where mde.moduleId = (select id from Module where moduleName = 'Travel Guard Insurance Extended Plans') and mde.name = 'travelInsurancePLanText';
INSERT INTO `ModuleDataValue` (moduleDataElementId , siteId, languageId, value1) select mde.id, 1, 1, '<a class="certificateLink" href="https://webservices.travelguard.com/Product/FileRetrieval.aspx?CountryCode=US&StateCode=NW&ProductCode=WS9838&PlanCode=P2&FileType=PROD_PLAN_DOC" target="_blank">Certificate of Insurance</a>' 
from ModuleDataElement mde where mde.moduleId = (select id from Module where moduleName = 'Travel Guard Insurance Extended Plans') and mde.name = 'certificateInsuranceTxt';
INSERT INTO `ModuleDataValue` (moduleDataElementId , siteId, languageId, value1, value2) select mde.id, 1, 1, 'Basic', 'Deluxe' from ModuleDataElement mde where mde.moduleId = (select id from Module where moduleName = 'Travel Guard Insurance Extended Plans') and mde.name = 'basicTxt';
INSERT INTO `ModuleDataValue` (moduleDataElementId , siteId, languageId, value1) select mde.id, 1, 1, 'ADD TO TRIP' from ModuleDataElement mde where mde.moduleId = (select id from Module where moduleName = 'Travel Guard Insurance Extended Plans') and mde.name = 'button text';
INSERT INTO `ModuleDataValue` (moduleDataElementId , siteId, languageId, value1, value2) select mde.id, 1, 1, 'ADDED', 'Added' from ModuleDataElement mde where mde.moduleId = (select id from Module where moduleName = 'Travel Guard Insurance Extended Plans') and mde.name = 'button text added';
INSERT INTO `ModuleDataValue` (moduleDataElementId , siteId, languageId, value1) select mde.id, 1, 1, 'Optional coverage not available' from ModuleDataElement mde where mde.moduleId = (select id from Module where moduleName = 'Travel Guard Insurance Extended Plans') and mde.name = 'optionalCoverageUnavailable';
INSERT INTO `ModuleDataValue` (moduleDataElementId , siteId, languageId, value1, value2) select mde.id, 1, 1, '<div class="travelGuardLogo">
  <img src="/images/travelGuardIcons/Travel_Guard_Logo.jpg"/>
</div>', '<div class="travelGuardInfoDiv" style="float:right;">
    <img src="/images/travelGuardIcons/Travel_Guard_Logo.jpg"/>
</div>' from ModuleDataElement mde where mde.moduleId = (select id from Module where moduleName = 'Travel Guard Insurance Extended Plans') and mde.name = 'travelGuardLogo';
INSERT INTO `ModuleDataValue` (moduleDataElementId , siteId, languageId, value1) select mde.id, 1, 1, '*By including insurance I acknowledge that I have read and understand the Certificate of Insurance and agree to the terms and conditions of the insurance coverage provider for the specific plan I chose.' from ModuleDataElement mde where mde.moduleId = (select id from Module where moduleName = 'Travel Guard Insurance Extended Plans') and mde.name = 'insuranceAcknowledgement';

UPDATE `PageModuleImplementation` SET active='N' WHERE pageImpId = (SELECT pi.id FROM PageImplementation pi WHERE pi.siteId = 1 AND pi.pageId = (select p.id from Page p where p.pageName = 'Checkout Page - V2')) and moduleId = (SELECT m.id FROM Module m WHERE m.moduleName = 'Redesigned checkout Insurance(checkout.v2)');

COMMIT;
