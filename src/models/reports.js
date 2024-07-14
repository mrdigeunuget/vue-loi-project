class Report {
  constructor({
    id,
    inspectionType,
    fields: {
      location,
      newDamage,
      damageType,
      date,
      urgentActionRequired,
      description,
      photos,
      maintenanceType,
      costEstimate,
      installationType,
      reportedFailures,
      testProcedure,
      approved,
      comments,
      existingSituationAndDocumentedModifications,
      modificationLocation,
      performedBy,
      modificationDescription,
      actionToBeTaken
    }
  }) {
    this.id = id;
    this.inspectionType = inspectionType;
    this.fields = {
      location: location || '',
      newDamage: newDamage || '',
      damageType: damageType || '',
      date: date || '',
      urgentActionRequired: urgentActionRequired || '',
      description: description || '',
      photos: photos || [],
      maintenanceType: maintenanceType || '',
      costEstimate: costEstimate || '',
      installationType: installationType || '',
      reportedFailures: reportedFailures || '',
      testProcedure: testProcedure || '',
      approved: approved || '',
      comments: comments || '',
      existingSituationAndDocumentedModifications: existingSituationAndDocumentedModifications || '',
      modificationLocation: modificationLocation || '',
      performedBy: performedBy || '',
      modificationDescription: modificationDescription || '',
      actionToBeTaken: actionToBeTaken || ''
    };
  }
}

export default Report