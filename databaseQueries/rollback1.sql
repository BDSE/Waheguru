use ContentManagement;

START TRANSACTION;

DELETE FROM ModuleDataValue 
WHERE moduleDataElementId IN (select mde.id from ModuleDataElement mde where mde.moduleId = (select m.id from Module m where m.moduleName = 'Travel Guard Insurance Extended Plans'));

DELETE FROM PageModuleImplementation 
WHERE pageImpId = (select id from PageImplementation where siteId = 1 AND pageId = (select id from Page where pageName = 'Checkout Page - V2'))
   AND moduleId = (select m.id from Module m where moduleName = 'Travel Guard Insurance Extended Plans');

DELETE FROM ModuleDataElement
WHERE moduleId = (select m.id from Module m where moduleName = 'Travel Guard Insurance Extended Plans');

DELETE FROM Module
WHERE moduleName = 'Travel Guard Insurance Extended Plans';

COMMIT;
