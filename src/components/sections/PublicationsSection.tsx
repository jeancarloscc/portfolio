import { FileText, ChevronRight } from 'lucide-react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { SectionContainer, SectionHeader } from '../common/SectionHeader';
import { TechBadge } from '../common/Badges';
import { colors, transitions } from '../../constants/theme';
import { PUBLICATION_CATEGORIES } from '../../constants/config';
import type { Publication } from '../../types';

interface PublicationsSectionProps {
  publications: Publication[];
}

/**
 * Seção de Publicações científicas
 */
export function PublicationsSection({ publications }: PublicationsSectionProps) {
  if (publications.length === 0) return null;

  return (
    <SectionContainer id="publications">
      <SectionHeader icon={FileText} title="Publicações" />

      {PUBLICATION_CATEGORIES.map((category) => {
        const categoryPubs = publications
          .filter((pub) => pub.category === category)
          .sort((a, b) => b.year - a.year);

        if (categoryPubs.length === 0) return null;

        return (
          <div key={category} className="mb-12">
            <h3 className="text-2xl font-light mb-6" style={{ color: colors.primary }}>
              {category}
            </h3>

            <div className="space-y-6">
              {categoryPubs.map((pub) => (
                <Card key={pub.id} className={`border-none shadow-sm hover:shadow-md ${transitions.shadow}`}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2" style={{ color: colors.text.primary }}>
                          {pub.title}
                        </CardTitle>

                        <CardDescription className="text-sm mb-2" style={{ color: colors.text.secondary }}>
                          {pub.authors}
                        </CardDescription>

                        <div className="flex items-center flex-wrap gap-2 mt-2">
                          <Badge variant="secondary" style={{ backgroundColor: colors.background.accent, color: colors.primary }}>
                            {pub.type}
                          </Badge>

                          <Badge variant="outline" style={{ borderColor: colors.secondary, color: colors.secondary }}>
                            {pub.year}
                          </Badge>

                          {pub.qualis && (
                            <Badge style={{ backgroundColor: colors.status.successBg, color: colors.status.success, border: 'none' }}>
                              Qualis {pub.qualis}
                            </Badge>
                          )}

                          {pub.classification && (
                            <Badge variant="outline" style={{ borderColor: colors.text.secondary, color: colors.text.secondary }}>
                              {pub.classification}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-sm italic mb-3" style={{ color: colors.text.secondary }}>
                      {pub.venue}
                    </p>

                    {pub.keywords && pub.keywords.length > 0 && (
                      <div className="mb-3">
                        <p className="text-xs font-medium mb-2" style={{ color: colors.primary }}>
                          Palavras-chave:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {pub.keywords.map((keyword, idx) => (
                            <TechBadge key={idx} tech={keyword} />
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex items-center gap-4 text-xs" style={{ color: colors.text.muted }}>
                      {pub.issn && <span>ISSN: {pub.issn}</span>}
                      {pub.isbn && <span>ISBN: {pub.isbn}</span>}
                    </div>

                    {pub.link && (
                      <Button
                        variant="link"
                        className="p-0 h-auto mt-3"
                        style={{ color: colors.primary }}
                        onClick={() => window.open(pub.link, '_blank')}
                      >
                        Ver publicação
                        <ChevronRight className="ml-1 w-4 h-4" />
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );
      })}
    </SectionContainer>
  );
}
