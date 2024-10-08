export interface Country {
  name: Name;
  cca3: string;
}

export interface Name {
  common: string;
  official: string;
  nativeName: { [key: string]: NativeName };
}

export interface NativeName {
  official: string;
  common: string;
}

export interface Patient {
  IPCODPACI: string;
  IPTIPODOC: number;
  CODIGONIT: null;
  IPEXPEDIC: string;
  IPPRIAPEL: string;
  IPSEGAPEL: string;
  IPPRINOMB: string;
  IPSEGNOMB: string;
  IPNOMCOMP: string;
  CODEMPRES: null;
  IPTIPOPAC: number;
  IPTIPOAFI: number;
  CAPACIPAG: number;
  CODENTIDA: null;
  CCCONTRAT: null;
  CPPLANBEN: null;
  AUUBICACI: null;
  NIVCODIGO: null;
  IPDIRECCI: string;
  IPTELEFON: string;
  IPTELMOVI: string;
  IPFECNACI: string;
  CODACTIVI: null;
  IPSEXOPAC: number;
  IPESTADOC: number;
  IPGRUPSAN: string;
  IPRHSANGR: string;
  TIPCOBSAL: null;
  CORELEPAC: string;
  CODGRUPOE: null;
  ESTADOPAC: boolean;
  OBSERVACI: null;
  INDAUDFOR: number;
  PACIEFOTO: null;
  PACIEHUELL: null;
  NUMCARPET: string;
  CODUSUCRE: string;
  FECREGCRE: Date;
  CODUSUMOD: null;
  FECREGMOD: Date;
  IPESTRATO: number;
  CREDCODIGO: null;
  DISCCODIGO: null;
  IDICODIGO: null;
  NIVECODIGO: null;
  GRUPCODIGO: null;
  ZONAPARTADA: boolean;
  GENCAREGROUP: number;
  GENCONENTITY: number;
  GENEXPEDITIONCITY: number;
  IPORIENTSEXUAL: number;
  IPIDENTSEXUAL: number;
  IPORIENTSEXOTRO: null;
  IPIDENTSEXOTRO: null;
  PESO: number;
  IPSEXO: null;
  IDENTMAMA: null;
  IDENTOBSERVAC: null;
  ID: number;
  IDPAIS: number;
  UsePortal: boolean;
  Key_Portal: null;
  INDIMOVIL: string;
  IdIntegration: null;
}
