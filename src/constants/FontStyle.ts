import Font from './AppFont'
/**
 * Mappings of custom font family to font styles. Provides a cleaner API
 */
enum FontStyle {
  BOLD = Font.MONTSERRAT_BOLD as any,
  THIN = Font.MONTSERRAT_THIN  as any,
  LIGHT = Font.MONTSERRAT_LIGHT as any,
  REGULAR = Font.MONTSERRAT_REGULAR  as any,
  SEMI_BOLD = Font.MONTSERRAT_SEMI_BOLD as any,
}

export default FontStyle
