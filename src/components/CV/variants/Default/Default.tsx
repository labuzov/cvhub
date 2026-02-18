import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import DOMPurify from 'dompurify';

import { MdEmail, MdLanguage, MdLocationOn, MdPhone } from 'react-icons/md';

import type { CVInfo } from '@/stores/CVStore';

import styles from './Default.module.scss';


type Props = {
  cv: CVInfo;
};

export const Default = ({ cv }: Props) => {
  const { t } = useTranslation();

  const summary = useMemo(() => DOMPurify.sanitize(cv.summary), [cv.summary]);
  const experience = useMemo(() => cv.experience.map(exp => ({
    ...exp,
    description: DOMPurify.sanitize(exp.description)
  })), [cv.experience]);

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.personal}>
          <div className={styles.name}>{cv.name}</div>
          <div className={styles.designation}>{cv.designation}</div>
          <div className={styles.contacts}>
            {cv.email && (
              <div className={styles.contactsItem}>
                <MdEmail />
                {cv.email}
              </div>
            )}
            {cv.phone && (
              <div className={styles.contactsItem}>
                <MdPhone />
                {cv.phone}
              </div>
            )}
            {cv.url && (
              <div className={styles.contactsItem}>
                <MdLanguage />
                {cv.url}
              </div>
            )}
            {cv.location && (
              <div className={styles.contactsItem}>
                <MdLocationOn />
                {cv.location}
              </div>
            )}
          </div>
        </div>
        <div className={styles.img}></div>
      </header>

      {!!cv.summary && (
        <section className={styles.section}>
          <div className={styles.sectionTitle}>
            {t('cv.summary')}
          </div>
          <div dangerouslySetInnerHTML={{ __html: summary }} />
        </section>
      )}

      {!!cv.skills.length && (
        <section className={styles.section}>
          <div className={styles.sectionTitle}>
            {t('cv.skills')}
          </div>
          <div className={styles.skills}>
            {cv.skills.map(skill => (
              <div key={skill.title} className={styles.skillsItem}>
                {skill.title}
                {skill.proficiency && ` ${skill.proficiency}%`}
              </div>
            ))}
          </div>
        </section>
      )}

      {!!cv.experience.length && (
        <section className={styles.section}>
          <div className={styles.sectionTitle}>
            {t('cv.experience')}
          </div>
          <div className={styles.experience}>
            {experience.map(exp => (
              <div key={exp.id} className={styles.experienceItem}>
                <div className={styles.experienceTitle}>
                  <div className={styles.experienceDesignation}>{exp.designation}</div>
                  {(!!exp.startDate || !!exp.endDate) && (
                    <div className={styles.experiencePeriod}>{exp.startDate} - {exp.isCurrent ? t('cv.isCurrent') : exp.endDate}</div>
                  )}
                </div>
                <div className={styles.experienceOrganization}>{exp.organization}</div>
                <div
                  className={styles.experienceDescription}
                  dangerouslySetInnerHTML={{ __html: exp.description }}
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {!!cv.education.length && (
        <section className={styles.section}>
          <div className={styles.sectionTitle}>
            {t('cv.education')}
          </div>
          <div className={styles.education}>
            {cv.education.map(edu => (
              <div key={edu.id} className={styles.educationItem}>
                <div className={styles.educationTitle}>
                  <div className={styles.educationPlace}>{edu.place}</div>
                  {(!!edu.startDate || !!edu.endDate) && (
                    <div className={styles.educationPeriod}>{edu.startDate} - {edu.isCurrent ? t('cv.isCurrent') : edu.endDate}</div>
                  )}
                </div>
                <div className={styles.educationProgram}>{edu.program}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {!!cv.certifications.length && (
        <section className={styles.section}>
          <div className={styles.sectionTitle}>
            {t('cv.certifications')}
          </div>
          <div className={styles.certifications}>
            {cv.certifications.map(cert => (
              <div key={cert.id} className={styles.certificationsItem}>
                <div className={styles.certificationsTitle}>
                  <div className={styles.certificationsName}>{cert.certName}</div>
                  {!!cert.date && (
                    <div className={styles.certificationsDate}>{cert.date}</div>
                  )}
                </div>
                <div className={styles.certificationsOrganization}>{cert.certOrganization}</div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
