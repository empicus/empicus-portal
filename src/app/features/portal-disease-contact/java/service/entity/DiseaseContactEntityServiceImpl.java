/**
 * 
 */
package com.alstradocs.empicus.diseasecontact.service.entity;

import java.util.List;
import java.util.Optional;

import javax.ejb.Stateless;
import javax.inject.Inject;

import com.alstradocs.empicus.diseasecontact.data.DiseaseContactData;
import com.alstradocs.empicus.diseasecontact.model.DiseaseContact;

import com.cloderia.enterprise.core.util.StringUtil;
import com.cloderia.enterprise.data.annotations.JPADataService;
import com.cloderia.enterprise.data.service.DataService;
import com.cloderia.enterprise.data.exceptions.DataNotFoundException;
import com.cloderia.enterprise.data.exceptions.DuplicateDataException;
import com.cloderia.enterprise.data.exceptions.DataServiceException;
import com.cloderia.enterprise.data.service.JPQLQueryBuilderService;
import com.cloderia.enterprise.model.EntityDataCriteria;
import com.cloderia.enterprise.model.data.BaseData;
import com.cloderia.enterprise.service.AbstractBusinessService;
import com.cloderia.enterprise.service.BusinessServiceException;
import com.cloderia.enterprise.service.exceptions.BusinessDataNotFoundException;
import com.cloderia.enterprise.service.exceptions.DuplicateBusinessDataException;

/**
 * @author Edward Banfa
 *
 */
@Stateless
public class DiseaseContactEntityServiceImpl extends AbstractBusinessService implements DiseaseContactEntityService {

	@Inject
	@JPADataService
	DataService dataService;
	
	/**
	 * 
	 */
	public DiseaseContactEntityServiceImpl() {
		super();
	}

	/**
	 * @param dataService
	 */
	public DiseaseContactEntityServiceImpl(DataService dataService) {
		super();
		this.dataService = dataService;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * com.alstradocs.empicus.diseasecontact.service.DiseaseContactFinderService#findById(java.lang.
	 * Long)
	 */
	public DiseaseContact findById(Long id) throws BusinessDataNotFoundException {
		try {
			return dataService.findById(id, DiseaseContact.class);
		} catch (DataNotFoundException e) {
			e.printStackTrace();
			throw new BusinessDataNotFoundException(e);
		}
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * com.alstradocs.empicus.diseasecontact.service.DiseaseContactFinderService#findByCode(java.lang
	 * .String)
	 */
	public DiseaseContact findByCode(String code) throws BusinessDataNotFoundException {
		try {
			return dataService.findByCode(code, DiseaseContact.class);
		} catch (DataNotFoundException e) {
			e.printStackTrace();
			throw new BusinessDataNotFoundException(e);
		}
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * com.alstradocs.empicus.diseasecontact.service.DiseaseContactFinderService#findDiseaseContactByCriteria(
	 * com.cloderia.alstracoin.core.data.EntityDataCriteria)
	 */
	public List<DiseaseContact> findByCriteria(EntityDataCriteria<DiseaseContact> criteria) throws BusinessDataNotFoundException {
		try {
			return dataService.findByCriteria(criteria);
		} catch (DataServiceException e) {
			e.printStackTrace();
			throw new BusinessDataNotFoundException(e);
		}
	}

	/**
	 * @param data
	 * @return
	 * @throws BusinessServiceException
	 */
	public DiseaseContact create(DiseaseContactData data) throws BusinessServiceException {
		try {
			DiseaseContact diseaseContact = new DiseaseContact();
			return dataService.create(diseaseContact);
		} catch (DuplicateDataException e) {
			throw new DuplicateBusinessDataException("Individual already exists");
		}
	}


    /**
     * @param code
     * @param DiseaseContact
     * @return
     * @throws BusinessServiceException
     */
    public DiseaseContact update(String code, DiseaseContactData diseaseContactData) throws BusinessServiceException {
		try {
			DiseaseContact diseaseContact = dataService.findByCode(code, DiseaseContact.class);
			return dataService.update(code, diseaseContact);
		} catch (DataNotFoundException e) {
			e.printStackTrace();
			throw new BusinessDataNotFoundException("DiseaseContact not found");
		}
	}


    /**
     * @param code
     * @param DiseaseContact
     * @return
     * @throws BusinessServiceException
     */
    public DiseaseContact update(DiseaseContactData diseaseContactData) throws BusinessServiceException {
		try {
			DiseaseContact diseaseContact = new DiseaseContact();
			return dataService.update(diseaseContact.getCode(), diseaseContact);
		} catch (DataNotFoundException e) {
			e.printStackTrace();
			throw new BusinessDataNotFoundException("DiseaseContact not found");
		}
	}

    /**
     * Deletes a DiseaseContact.
     * @param code
	 * @return The code of the deleted DiseaseContact
     */
    public String delete(String code) throws BusinessServiceException {
		try {
			return dataService.delete(code, DiseaseContact.class);
		} catch (DataNotFoundException e) {
			e.printStackTrace();
			throw new BusinessDataNotFoundException("DiseaseContact not found");
		}
	}
}